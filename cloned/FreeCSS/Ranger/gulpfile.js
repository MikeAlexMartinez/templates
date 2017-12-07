'use strict';

const browserify = require('browserify');
const gulp = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const uglify = require('gulp-uglify');

const sass = require('gulp-sass');

const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

/**
 * The JS gulp task creates two file, one with my source code which will change more
 * frequently and another for vendor files which will allow for longer caching of files.
 */

/* JS vendor libs */
const vendorsJs = ['jquery','waypoints/lib/noframework.waypoints','owl.carousel'];

gulp.task('js:vendor', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    debug: true
  });

  // require all libs from vendors array
  vendorsJs.forEach(lib => {
    b.require(lib);
  });

  b.bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js/'));  

});

gulp.task('js:app', () => {
  browserify({
    entries: ['./src/js/main.js'],
    extensions: ['.js'],
    debug: true
  })
    .external(vendorsJs)
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js/'))
});

/** 
 *  Sass compiling gulp task allows for including node_modules and also writes
 *  sourcmaps to allow for easier debugging.
 **/
gulp.task('sass', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/sass/*.scss',
              './src/sass/**/*.scss'
            ], ['sass']);
  gulp.watch(['./src/js/*.js'], ['js:app']);
});

gulp.task('default', ['sass','js:app', 'js:vendor']);