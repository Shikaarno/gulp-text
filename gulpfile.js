const { parallel, series, src, dest } = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


function lessToMinCss() {
  return src('./src/less/temp.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("/"))
    .pipe(dest('./css'));
};

exports.less = lessToMinCss;