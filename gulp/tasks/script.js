'use strict';

var gulp          = require('gulp'),
    util          = require('gulp-util'),
    jshint        = require('gulp-jshint'),
    stylish       = require('jshint-stylish'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    rename        = require('gulp-rename'),
    gulpif        = require('gulp-if'),
    sourcemaps    = require('gulp-sourcemaps'),
    runSequence   = require('run-sequence');

var config      = require('../config').script,
    writeSourcemaps  = !util.env.production;

// Lint Task
gulp.task('script-lint', function() {
  return gulp.src(config.mainSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Concatenate & Minify Custom JS
gulp.task('script-main', ['script-lint'], function() {
  return gulp.src(config.mainSrc)
    .pipe(gulpif(writeSourcemaps, sourcemaps.init()))
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(gulpif(writeSourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.dest));
});

// Concatenate & Minify Vendor JS
gulp.task('script-vendor-footer', function() {
  return gulp.src(config.vendorFooterSrc)
    .pipe(gulpif(writeSourcemaps, sourcemaps.init()))
      .pipe(concat('vendor-footer.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(gulpif(writeSourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.dest));
});

// Minify Modernizr JS
gulp.task('script-vendor-header', function() {
  return gulp.src(config.vendorHeaderSrc)
    .pipe(gulpif(writeSourcemaps, sourcemaps.init()))
      .pipe(concat('vendor-header.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(gulpif(writeSourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.dest));
});

// Synthetize javascript tasks in one
gulp.task('script', function(callback) {
  runSequence('script-vendor-header', 'script-vendor-footer', 'script-main', callback);
});

