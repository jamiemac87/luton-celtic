const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const config = require('./gulp.config')();

/**
 * DEPLOY
 *
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src(config.deploy.dist)
    .pipe(deploy())
});