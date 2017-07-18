'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var replaceName = require('gulp-replace-name');

gulp.task('sass', ['clean'], function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('minify-css', ['clean'], function () {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('compress', ['replaceName'], function() {
  return gulp.src('build/app/**/*.js')
    .pipe(minify({
      ext:{
            src:'.js',
            min:'.min.js'
      },
      ignoreFiles: ['bootstrap.js']
    }))
    .pipe(gulp.dest('build/app'))
});

gulp.task('html', ['clean'], function () {
  return gulp.src(['src/**/*.html'])
  .pipe(gulp.dest('build/'));
});

gulp.task('vendor', ['clean'], function () {
  return gulp.src(['src/vendor/**/*'])
  .pipe(gulp.dest('build/vendor/'));
});

gulp.task('js', ['clean'], function () {
  return gulp.src(['src/js/**/*'])
  .pipe(gulp.dest('build/js/'));
});

gulp.task('replace', ['clean', 'compress'], function () {
  return gulp.src(['src/app/bootstrap.js'])
    .pipe(replace('.dev', '.min'))
    .pipe(gulp.dest('build/app'));
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
      .pipe(clean());
});

gulp.task('replaceName', ['clean'], function() {
  return gulp.src('src/app/**/*.js')
    .pipe(replaceName(/\.dev.js/g, '.js'))
    .pipe(gulp.dest('build/app'));
});


gulp.task('default', [ 'clean', 'html', 'vendor', 'js', 'sass', 'minify-css', 'compress', 'replace', 'replaceName']);



 
