'use strict';

import gulp from 'gulp';
import del from 'del';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

const dirs = {
  srcJs: ['app/**/*.js'],
  dist: 'dist',
  distFiles: 'dist/**/*.*'
};

gulp.task('clean', () => {
  return del([dirs.distFiles]);
});

gulp.task('lint', ['clean'], () => {
  return gulp.src(dirs.srcJs)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('transpile', ['lint', 'clean'], () => {
  return gulp.src(dirs.srcJs)
    .pipe(babel())
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('watch', ['transpile'], () => {
  return nodemon({
    script: 'dist/index.js',
    watch: dirs.srcJs,
    tasks: ['transpile']
  });
});

gulp.task('serve', ['watch']);

gulp.task('default', ['serve']);
