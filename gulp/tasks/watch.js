'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch');

var config = require('../config');

gulp.task('watch', function () {

  // css
  watch(config.css.src, function () {
    gulp.start('css');
  });

  // fonts
  watch(config.fonts.src, function() {
    setTimeout(function() {
      gulp.start('fonts');
    }, 1500);
  });

  // img
  watch(config.img.src, function() {
    setTimeout(function() {
      gulp.start('img');
    }, 3500);
  });

  // script
  watch(config.script.mainSrc, function() {
    gulp.start('script-main');
  });

  // svg
  watch(config.svg.src, function() {
    setTimeout(function() {
      gulp.start('img-svg');
    }, 3500);
  });

});