const { parallel, series, src, dest } = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');


function less_compile() {
  return src('./src/less/template.less')
    .pipe(less())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("/"))
    .pipe(dest('./css'));
};

exports.less = less_compile;