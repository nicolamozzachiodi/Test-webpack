const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');
const webpack = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('./src/js/index.js')
    .pipe(webpack({
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['node_modules/slick-carousel/slick']
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', gulp.parallel('scripts'));
    gulp.watch('src/**/*.scss', gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('scripts', 'styles'))