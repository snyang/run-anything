'use strict'

const gulp = require('gulp')
const GulpSSH = require('gulp-ssh');
const path = require('path');
const scp = require('gulp-scp2');

const config = require('./GulpConfig.js');

let ssh = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.sshConfig,
});

gulp.task('remote:echo', () => {
  return execute('echo hello');
});

gulp.task('remote:push', () => {
  console.log("copy " + getAbsolutePath(config.source.build_dir));
  
  return gulp.src(path.join(__dirname, "..", config.source.build_dir, "**/*"))
    .pipe(scp(Object.assign(config.sshConfig, {"dest": config.remote.app_root_dir})))
    .on('error', function(err) {
      console.log(err);
    });
});

gulp.task('remote:install-express', () => {
  return execute('yarn add express', {cwd: config.remote.app_root_dir});
});

gulp.task('remote:start', () => {
  return execute('nohup node ' + path.join(config.remote.app_root_dir, config.source.startServer_name) + ' </dev/null &', 
                {cwd: config.remote.app_root_dir});
});

function getAbsolutePath(rootRelativePath) {
  return path.join(__dirname, "..", rootRelativePath)
}
function execute(cmd, options) {
  let commands = [cmd];
  if (options != undefined && options.cwd != undefined) {
    commands = ['cd "' +  options.cwd + '"',
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
