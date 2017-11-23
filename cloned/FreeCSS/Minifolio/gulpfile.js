'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./MyCode/src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./MyCode/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./MyCode/src/sass/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.start("sass");
});