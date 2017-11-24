'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./MyCode/src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./MyCode/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./MyCode/src/sass/*.scss','./MyCode/src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', function() {
  gulp.start("sass");
});