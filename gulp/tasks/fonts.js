'use strict';

var gulp          = require('gulp');

var config      = require('../config').fonts;

gulp.task('fonts', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});