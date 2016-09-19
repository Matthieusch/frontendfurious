'use strict';

var gulp          = require('gulp'),
    clean         = require('gulp-clean');

var config = require('../config').clean;

// Clean Output Directory
gulp.task('clean', function () {
  return gulp.src(config.dest, {read: false})
    .pipe(clean({force: true}));
});