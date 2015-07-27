var gulp      = require('gulp');
var jshint    = require('gulp-jshint');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');

// gulp.task('lint', function() {
// 	gulp.src('./src/*.js')
// 		.pipe(jshint())
// 		.pipe(jshint.reporter(require('jshint-stylish')));
// });

// gulp.task('test', function () {

// });

// gulp.task('min', function () {
// 	return gulp.src('./src/**/*.js')
// 		.pipe(rename('namespacer.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./dist'));
// });

// gulp.task('default', function () {
// 	gulp.run('test');
// });

// gulp.task('dist', function () {
// 	gulp.run('lint');
// 	gulp.run('min');
// });
