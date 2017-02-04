const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const nunjucksRender = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create('my server');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const config = require('./gulp.config')();

/**
 * BUILD-TEMPLATES
 */
gulp.task('build-templates', function () {
  return gulp.src('./src/pages/**/*.+(html|nunjucks)')
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: ['./src/templates']
    }))
    .pipe(gulp.dest('./dist'))
    .on("end", browserSync.reload);
});

/**
 * IMAGES
 */
gulp.task('images', function () {
  return gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.dist));
});

/**
 * FONTS
 */
gulp.task('fonts', function () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dist));
});

/**
 * JS-VENDOR
 */
gulp.task('js-vendor', function () {
  return gulp.src(config.jsVendor.src)
    .pipe(gulp.dest(config.jsVendor.dist));
});

/**
 * JS-CLIENT
 */
gulp.task('js-client', function () {
  return gulp.src(config.jsClint.src)
    .pipe(gulp.dest(config.jsClint.dist));
});

/**
 * CNAME
 */
gulp.task('cname', function () {
  return gulp.src('./CNAME')
    .pipe(gulp.dest(config.dist));
});

/**
 * INSTALL-DEP
 */
gulp.task('install-dep', ['cname', 'fonts', 'images', 'js-vendor']);

/**
 * SASS
 */
gulp.task('sass', function () {
  return gulp.src(config.scss.src)
    .pipe(sass(config.scss.options).on('error', sass.logError))
    .pipe(gulp.dest(config.scss.dist))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['install-dep', 'build-templates', 'sass', 'js-client'], function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/**/*.nunjucks', ['build-templates']);
  gulp.watch('./src/js/**/*.js', ['js-client']).on('change', browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

/**
 * DEPLOY
 *
 * Push build to gh-pages
 */
gulp.task('deploy', ['install-dep', 'build-templates', 'sass', 'js-client'], function () {
  return gulp.src(config.deploy.dist)
    .pipe(deploy())
});
