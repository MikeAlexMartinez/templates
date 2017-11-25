'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
// const bundle = require('gulp-bundle-assets');
const sourcemaps = require('gulp-sourcemaps');


/* 
gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(sourcemaps.init())
    .pipe(bundle())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./MyCode/dist/js/main.js'));
});*/

gulp.task('sass', function() {
  return gulp.src('./MyCode/src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./MyCode/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./MyCode/src/sass/*.scss','./MyCode/src/sass/**/*.scss'], ['sass']);
  
  // for gulp-bundle-assets - not being used any more
  //gulp.watch('./MyCode/src/js/*.js',['bundle']);
});

gulp.task('default', function() {
  gulp.start("sass");
});