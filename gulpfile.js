const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

gulp.task('message', async () => {
	console.log('Gulp running...');
});

gulp.task('html', async () => {
	gulp.src('./src/*.html').pipe(gulp.dest('./dist'));
});

gulp.task('sass', async () => {
	gulp.src('./src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('js', async () => {
	gulp.src('./src/js/*js')
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
})

gulp.task('default', gulp.series('message', 'html', 'sass', 'js'));

gulp.task('watch', async () => {
	gulp.watch('./src/*.html', gulp.series('html'));
	gulp.watch('./src/sass/*.scss', gulp.series('sass'));
	gulp.watch('./src/js/*.js', gulp.series('js'));
});