let gulp = require('gulp')
let insert = require('gulp-insert')
let markdown = require('gulp-markdown')
let livereload = require('gulp-livereload')
let fs = require('fs')
let livereloadPort = 9124

gulp.task('default', ['simple'], () => {
  livereload.listen({port: livereloadPort})
  gulp.watch(['./index.html', './style.css', './script.js', './defaults/*.*'], ['simple'])
})

gulp.task('simple', () => {
  let style = fs.readFileSync('style.css', 'utf8')
  let script = fs.readFileSync('script.js', 'utf8')
  gulp.src('./index.html')
      .pipe(insert.transform((contents, file) => {
        return contents.replace(/\b([-.\w]+)\.j\b/gm, '<img src="$1.jpg" />')
      }))
      .pipe(markdown())
      //.pipe(insert.append(`<style>${style}</style>`))
      .pipe(insert.append(`<script src="http://localhost:${livereloadPort}/livereload.js?snipver=1"></script>`))
      .pipe(insert.append(`<script>${script}</script>`))
      .pipe(gulp.dest('./out'))
      .pipe(livereload())
})

gulp.task('dubpage', () => {
  let defaultStyles = fs.readFileSync('defaults/style.css', 'utf8')
  let script = fs.readFileSync('defaults/script.js', 'utf8')
  gulp.src('./index.html')
      .pipe(insert.transform((contents, file) => {
        return contents.replace(/\b([-.\w]+)\.j\b/gm, '<img src="$1.jpg" />')
      }))
      .pipe(markdown())
      .pipe(insert.append(emptyLines(30)))
      // .pipe(insert.append(`<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">`))
      .pipe(insert.append(`<script src="http://localhost:9123/livereload.js?snipver=1"></script>`))
      .pipe(insert.append(`<style>${defaultStyles}</style>`))
      .pipe(insert.append(`<script>${script}</script>`))
      .pipe(gulp.dest('./out'))
      .pipe(livereload())
})

function emptyLines (n) {
  return [...new Array(n)].reduce(a => a + '\n', '')
}


function emptyLines (n) {
  return [...new Array(n)].reduce(a => a + '\n', '')
}
