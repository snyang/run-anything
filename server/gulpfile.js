'use strict';

//const runSequence = require('run-sequence');
const gulp = require('gulp');
const requireDir = require('require-dir');

// Require all tasks.
requireDir('./tasks', { recurse: true });

// deploy the server application to the server
gulp.task('default', gulp.series('deploy'));

// start the remote server
gulp.task('start-server', gulp.series('remote:start'));
