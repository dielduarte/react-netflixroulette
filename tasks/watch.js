var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('app/assets/styles/**/*.scss', ['css']);
    gulp.watch('app/**/*.jade', ['jade']);
});
