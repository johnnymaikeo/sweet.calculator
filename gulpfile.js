'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});


gulp.task('default', [ 'sass', 'minify-css']);



 
gulp.task('compress', function() {
  gulp.src('src/app/**/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.js'
        },
    }))
    .pipe(gulp.dest('build/app'))
});