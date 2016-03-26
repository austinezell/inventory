var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var prefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify');
var webpack = require('webpack');

var paths = {
  src: {
    sass: './src/scss/**/*.scss',
    javascript: './src/js/**/*.js',
    templates: './src/templates/**/*.html',
    assets: './src/assets/**/*'
  },
  dest: {
    sass: './www/css/',
    javascript: './www/js/dist/',
    templates: './www/templates/',
    assets: './www'
  }
};

gulp.task('default', ['sass', 'javascript', 'templates', 'assets',  'watch']);
gulp.task('dev', ['sass', 'javascript', 'templates', 'assets']);

gulp.task("javascript", function(done) {
  webpack(require("./webpack.config.js"), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({}));
    gulp.src('./www/js/dist/bundle.js')
    .pipe(minify({
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest(paths.dest.javascript))
    .on('end', done)
  });
});


gulp.task('sass', function(done) {
  gulp.src(paths.src.sass)
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(paths.dest.sass))
  .pipe(clean())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest(paths.dest.sass))
  .on('end', done);
});

gulp.task('templates', function(done){
  gulp.src(paths.src.templates)
  .pipe(gulp.dest(paths.dest.templates))
  .on('end', done);
})

gulp.task('assets', function(done){
  gulp.src(paths.src.assets)
  .pipe(gulp.dest(paths.dest.assets))
  .on('end', done);
})

gulp.task('watch', function() {
  gulp.watch(paths.src.sass, ['sass']);
  gulp.watch(paths.src.templates, ['templates']);
  gulp.watch(paths.src.assets, ['assets']);
  gulp.watch(paths.src.javascript, ['javascript']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
  .on('log', function(data) {
    gutil.log('bower', gutil.colors.cyan(data.id), data.message);
  });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
