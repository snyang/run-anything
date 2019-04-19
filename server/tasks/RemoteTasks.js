'use strict'

const gulp = require('gulp')
const GulpSSH = require('gulp-ssh');
const path = require('path');
const scp = require('gulp-scp2');

const config = require('./config.js/index.js');

let ssh = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.sshConfig,
});

gulp.task('remote:echo', () => {
  return execute('echo hello');
});

gulp.task('remote:push-source', () => {
  console.log("copy " + getAbsolutePath(config.source.src_dir));

  return gulp.src(path.join(__dirname, "..", config.source.src_dir, "**/*"))
    .pipe(
      scp(
        Object.assign(
          config.sshConfig,
          { "dest": path.join(config.remote.app_root_dir, 'src') }
        )
      )
    )
    .on('error', function (err) {
      console.log(err);
    });
});

gulp.task('remote:push-package-json', () => {
  console.log("copy " + getAbsolutePath(config.source.package_json_dir));

  return gulp.src
    (
      path.join(
        __dirname, "..", config.source.package_json_dir
      )
    )
    .pipe
    (
      scp(
        Object.assign(
          config.sshConfig,
          { "dest": config.remote.app_root_dir }
        )
      )
    )
    .on('error', function (err) {
      console.log(err);
    });
});

gulp.task('remote:push', gulp.series('remote:push-source', 'remote:push-package-json'));

gulp.task('remote:install-express', () => {
  return execute('yarn add express --dev', { cwd: config.remote.app_root_dir });
});

gulp.task('remote:install', () => {
  return execute('npm install',
    { cwd: config.remote.app_root_dir });
});

gulp.task('remote:start', () => {
  return execute('nohup npx ts-node ' + path.join(config.remote.app_root_dir, 'src', config.source.startServer_name) + ' </dev/null &',
    { cwd: config.remote.app_root_dir });
});

function getAbsolutePath(rootRelativePath) {
  return path.join(__dirname, "..", rootRelativePath)
}
function execute(cmd, options) {
  let commands = [cmd];
  if (options != undefined && options.cwd != undefined) {
    commands = ['cd "' + options.cwd + '"',
      cmd]
  }
  return ssh.shell(commands, options).pipe(gulp.dest(config.source.log_dir))
    .on('data', function (chunk) {
      console.log(chunk._contents.toString('utf8'));
    })
    .on('error', function (e) {
      console.log(JSON.stringify(e, null, 2));
    });
}

module.exports = {
  execute: execute
}
