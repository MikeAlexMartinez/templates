'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/sass/*.scss','./src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', function() {
  gulp.start("sass");
});