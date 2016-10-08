'use strict';

var gulp          = require('gulp'),
    util          = require('gulp-util'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    gulpif        = require('gulp-if'),
    sourcemaps    = require('gulp-sourcemaps');

var config      = require('../config').css,
    writeSourcemaps  = !util.env.production;

gulp.task('css', function() {
  gulp.src(config.src)
    .pipe(gulpif(writeSourcemaps, sourcemaps.init()))
      .pipe(plumber({
        errorHandler: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true
      }))
      .pipe(autoprefixer("last 2 versions", "> 1%", "IE 9"))
      .pipe(rename({suffix: '.min'}))
    .pipe(gulpif(writeSourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.dest));
});