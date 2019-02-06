'use strict';

//const runSequence = require('run-sequence');
const gulp = require('gulp');
const requireDir = require('require-dir');


// Require all tasks.
requireDir('./gulp', { recurse: true });


gulp.task('default', gulp.series('deploy'));
// gulp.task('default', (callback) => {
//   // build -> 
//   runSequence('deploy', callback);
// });