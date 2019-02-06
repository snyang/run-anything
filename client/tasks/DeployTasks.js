'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('./GulpConfig.js');
require('./RemoteTasks');

gulp.task('print-config', (callback) => {
  console.log("Configuration = " + JSON.stringify(config, null, 2));
  callback();
});

gulp.task('build', shell.task(['yarn build']));

gulp.task('copy-start-server-script', () => {
  return gulp.src(config.source.startServer_dir)
    .pipe(gulp.dest(config.source.build_dir + "/"));
});

gulp.task('copy-package-json', () => {
  return gulp.src(config.source.package_json_dir)
    .pipe(gulp.dest(config.source.build_dir + "/"));
});

gulp.task('copy-help-files', gulp.series('copy-start-server-script', 'copy-package-json'));

gulp.task('deploy', 
  gulp.series('print-config',
    'build',
    'copy-help-files',
    'remote:push',
    //'remote:install-express',
    'remote:start'));