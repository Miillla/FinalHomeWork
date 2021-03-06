const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    return  gulp.src('./src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/*.scss', style).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    //gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;