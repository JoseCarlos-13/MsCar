const gulp = require('gulp')
const gulpImage = require('gulp-image')
const gulpMinifyCSS = require('gulp-css')
const gulpMinifyHTML = require('gulp-htmlmin')

gulp.task('minifyCSS', () => {
  return gulp.src('./src/CSS/*.css')
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

gulp.task('executeAll', 
  gulp.parallel([
    'minifyCSS',
    'minifyHTML',
    'minifyBootstrapCSS', 
    'minifyImages', 
    'minifyIcons', 
    'minifyLogos'
  ]), () => {
    gulp.watch(['./src/HTML/*.html', './src/CSS/*.css'])
})