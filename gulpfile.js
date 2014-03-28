var gulp = require('gulp');
var shell = require('gulp-shell');
var stylus = require('gulp-stylus');

gulp.task('styles', function () {
    gulp.src('./www/assets/styles/source/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./www/assets/styles'));
});

gulp.task('cca', shell.task('cca run android'));

gulp.task('clean', shell.task('rm www/assets/styles/*.css'));

gulp.task('watch', function() {

    gulp.watch('./www/index.html', ['cca']);
    gulp.watch('./www/assets/scripts/index.js', ['cca']);
    gulp.watch('./www/assets/styles/source/*.styl', ['styles', 'cca']);
});

//gulp.task('default', ['styles', 'watch', 'cca']);
gulp.task('default', ['styles', 'cca']);
