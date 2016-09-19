'use strict';

var gulp          = require('gulp'),
    changed       = require('gulp-changed'),
    rename        = require('gulp-rename'),
    imagemin      = require('gulp-imagemin');

var config      = require('../config').img,
    svg         = require('../config').svg;

gulp.task('img', function () {
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('img-svg', function () {
  gulp.src(svg.src)
    .pipe(gulp.dest(svg.dest));
});