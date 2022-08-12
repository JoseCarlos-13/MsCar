const gulp = require('gulp')
const sass = require('gulp-sass')
const gulpImage = require('gulp-image')
const gulpMinifyCSS = require('gulp-clean-css')
const gulpMinifyHTML = require('gulp-htmlmin')
const jsmin = require('gulp-jsmin');
const liveServer = require('live-server')
const ip = require('ip')
sass.compiler = require('node-sass');

gulp.task('transformSassInCSS', () => {
  return gulp.src('./src/Sass/*.scss')
    .pipe(sass())
    .pipe(gulpMinifyCSS())
    .pipe(gulp.dest('./dist/CSS'))
})

gulp.task('minifyBootstrapCSS', () => {
  return gulp.src('./src/bootstrap/css/*.css')
             .pipe(gulpMinifyCSS())
             .pipe(gulp.dest('./dist/bootstrap/css'))
})

gulp.task('minifyImages', () => {
  return gulp.src('./src/assets/imagens/*')
             .pipe(gulpImage())
             .pipe(gulp.dest('./dist/assets/imagens'))
})

gulp.task('minifyJS', () => {
  return gulp.src('./src/JS/*.js')
             .pipe(jsmin())
             .pipe(gulp.dest('./dist/JS'))

})

gulp.task('minifyIcons', () => {
  return gulp.src('./src/assets/SocialIcons/*')
             .pipe(gulpImage())
             .pipe(gulp.dest('./dist/assets/SocialIcons'))
})

gulp.task('minifyLogos', () => {
  return gulp.src('./src/assets/logos/*')
             .pipe(gulpImage())
             .pipe(gulp.dest('./dist/assets/logos'))
})

gulp.task('minifyHTML', () => {
  return gulp.src('./src/HTML/*.html')
             .pipe(gulpMinifyHTML({ collapseWhitespace: true }))
             .pipe(gulp.dest('./dist/HTML'))
})

gulp.task('server', () => {
  const liveBrowser = {
    port: 8080,
    host: ip.address(),
    open: true,
    root: './dist',
    file: '/HTML/mainpage.html'
  }

  return liveServer.start(liveBrowser)
})

gulp.task('executeAll',
  gulp.series(
    'transformSassInCSS',
    'minifyHTML',
    'minifyBootstrapCSS',
    'minifyImages',
    'minifyJS',
    'minifyIcons',
    'minifyLogos',
    'server'
  )
)

gulp.task('reloadHTMLAndCSS', () => {
  gulp.series(
    'minifyHTML',
    'transformSassInCSS',
    'minifyJS'
  )
})

gulp.watch([
  './src/HTML/*.html',
  './src/JS/*.js',
  './src/Sass/*.scss'
], gulp.series('minifyHTML', 'transformSassInCSS', 'minifyJS'))
