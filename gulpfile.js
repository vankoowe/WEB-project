var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
const minify = require('gulp-minify-css');
const postcss = require('gulp-postcss')
var sasslint = require('gulp-sass-lint');

gulp.task('default', function () {
    return gulp.watch('src/sass/*.scss', gulp.series('style', 'mini', 'lint'));
});

function style() {
    return (

		gulp
            .src("src/sass/*.scss")
            .pipe(sass())
            .pipe(postcss([ autoprefixer() ]))
            .on("error", sass.logError)
            .pipe(gulp.dest("dist/css"))
	
    );
	
}
exports.style = style;

function mini() {
	return(
		gulp
			.src("dist/css/*.css")
	    	.pipe(minify())
	    	.pipe(gulp.dest("dist/css/minifiles"))
	);
}
exports.mini = mini;

function lint() {
	return(
		gulp
			.src("src/sass/*.scss")
			.pipe(sasslint())
			.pipe(sasslint.format())
			.pipe(sasslint.failOnError())
	);
}
exports.lint = lint;
