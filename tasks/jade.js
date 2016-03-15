var gulp = require('gulp');
var minifyHTML = require('gulp-htmlmin');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

gulp.task('jade', function () {
    var opts = {
        comments: true
    };

    gulp.src(['./app/**/*.jade'])
        .pipe(plumber())
        .pipe(jade({pretty: true}))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./build/'))
});
