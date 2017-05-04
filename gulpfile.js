let gulp = require('gulp')
let insert = require('gulp-insert')
let markdown = require('gulp-markdown')
let livereload = require('gulp-livereload')
let sass = require('gulp-sass')
let fs = require('fs')
let livereloadPort = 9124

let scss = ['*.scss']

gulp.task('default', ['html'], () => {
  livereload.listen({port: livereloadPort})
  gulp.watch(['./index.html', './style.css', './script.js', './defaults/*.*', './out/dev.css'], ['html'])
  gulp.watch(scss, ['css']);
})

gulp.task('html', () => {
  let style = fs.readFileSync('style.css', 'utf8')
  let script = fs.readFileSync('script.js', 'utf8')
  return gulp.src('./index.html')
      .pipe(insert.transform((contents, file) => {
        return contents.replace(/\b([-.\w]+)\.j\b/gm, '<img src="$1.jpg" width="100%"/>')
      }))
      .pipe(insert.transform((contents, file) => {
        return contents.replace('styleme', `<style>${style}</style>`)
      }))
      .pipe(markdown())
      //.pipe(insert.append(`<style>${style}</style>`))
      .pipe(insert.append(`<script src="http://localhost:${livereloadPort}/livereload.js?snipver=1"></script>`))
      .pipe(insert.append(`<script>${script}</script>`))
      .pipe(gulp.dest('./out'))
      .pipe(livereload())
})

gulp.task('css', () => {
  return gulp.src(scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./out'))
		.pipe(livereload())
})

function emptyLines (n) {
  return [...new Array(n)].reduce(a => a + '\n', '')
}
