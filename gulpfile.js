var gulp = require('gulp');
var es6transpiler = require('gulp-es6-transpiler');
 
gulp.task('default', function () {
    return gulp.src('components/dashboard/')
        .pipe(es6transpiler())
        .pipe(gulp.dest('components/dashboard/'));
});