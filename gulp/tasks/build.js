'use strict';

var gulp          = require('gulp'),
    runSequence   = require('run-sequence');

// Launch all tasks bear hug now!
gulp.task('build', function(callback) {
  runSequence('clean', ['script', 'fonts', 'img', 'img-svg', 'css']);
});