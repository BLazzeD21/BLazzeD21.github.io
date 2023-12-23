const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: 'build',
    },
  });
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function() {
  return gulp
    .src('src/sass/**/*.+(scss|sass)')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
  gulp.watch('src/*.html').on('change', gulp.parallel('index'));
  gulp.watch('src/js/**/*.js').on('change', gulp.parallel('scripts'));
  gulp.watch('src/fonts/**/*').on('all', gulp.parallel('fonts'));
  gulp.watch('src/icons/**/*').on('all', gulp.parallel('icons'));
  gulp.watch('src/img/**/*').on('all', gulp.parallel('images'));
  // gulp.watch('src/html/**/*').on('all', gulp.parallel('html'));
});

gulp.task('index', function() {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});

// gulp.task('html', function() {
//   return gulp
//     .src('src/html/**/*')
//     .pipe(gulp.dest('build/html'))
//     .pipe(browserSync.stream());
// });

gulp.task('scripts', function() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
  return gulp
    .src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
    .pipe(browserSync.stream());
});

gulp.task('icons', function() {
  return gulp
    .src('src/icons/**/*')
    .pipe(gulp.dest('build/icons'))
    .pipe(browserSync.stream());
});

gulp.task('images', function() {
  return gulp
    .src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
    .pipe(browserSync.stream());
});

gulp.task(
  'default',
  gulp.parallel(
    'watch',
    'server',
    'styles',
    'scripts',
    'fonts',
    'icons',
    'index',
    'images',
    // 'html',
  ),
);
