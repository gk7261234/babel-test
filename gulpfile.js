/**
 * Created by GK on 2018/11/9.
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')

var plugins = require('gulp-load-plugins')()
gulp.task('es6',function () {
  return gulp.src(['./click.js','./test/**/*.js'])
    .pipe(plugins.plumber())
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/'))
})