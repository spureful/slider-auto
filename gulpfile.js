'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const  watch = require('gulp-watch');
const runSequence = require('run-sequence');

//переносим html

gulp.task('html', function() {
return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
    
});

//переносим шрифты

gulp.task('fonts', function() {
return gulp
    .src('./src/fonts/**')
    .pipe(gulp.dest('./build/fonts'))
    .pipe(reload({stream: true}));
    
});
//переносим JS

gulp.task('sript', function() {
return gulp
    .src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'))
     .pipe(reload({stream: true}));
    
});
//таск сасс
gulp.task('sass', function() {
return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
     browsers: ['last 2 versions'],
            cascade: false
}))
    .pipe(gulp.dest('./build/css'))
     .pipe(reload({stream: true}));
    
});

//сжатие картинок
gulp.task('image', function() {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
        .pipe(reload({stream: true}));
});

//очищаем билд

gulp.task('clean', function() {
    return del('./build');
});

//лавйв-сервер

gulp.task('server', function() {
     browserSync.init({
        server: {
            baseDir: 'build'
        }, 
        open: true
    });
});

//вотчер 
gulp.task('watch', function() {
    gulp.watch('./src/*.html', function() {
        gulp.start('html');
    });
        gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], function() {
        gulp.start('sass');
    });
      gulp.watch('./src/img/**/*', function() {
        gulp.start('image');
    });
          gulp.watch('./src/js/*.js', function() {
        gulp.start('script');
    });
});

//дефолтный таск

gulp.task('default', function() {
   runSequence (
       'clean',
       'fonts',
       'html',
       'image',
       'sass',
       'sript',
       'watch',
       'server'
   )
});
