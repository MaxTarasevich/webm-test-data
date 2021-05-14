const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const config = require('../config')

let data = require('../../src/data/data.json') // export data.json for pug


module.exports = function pug2html() {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({ pretty: config.pug2html.beautifyHtml,
              locals:data}))
    .pipe(gulp.dest('build'))
}

