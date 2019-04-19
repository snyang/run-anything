'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('./config.js/index.js');
require('./RemoteTasks');

gulp.task('print-config', (callback) => {
  console.log("Configuration = " + JSON.stringify(config, null, 2));
  callback();
});

gulp.task('deploy', 
  gulp.series('print-config',
    'remote:push',
    // 'remote:install',
    'remote:echo'));