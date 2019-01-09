const gulp = require('gulp'),	
	  sass = require('gulp-sass'),	  
	  livereload = require('gulp-livereload'),
	  autoprefixer = require('gulp-autoprefixer'),
	  connect = require('gulp-connect'),
      babel = require('gulp-babel'),
      pug = require('gulp-pug');

gulp.task('connect', () => {
	connect.server({
		root: 'dist',
		livereload: true
	})
})

gulp.task('css', () => {
    gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7'],
            cascade: false
        }))	
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload())			
});

gulp.task('js', () => {
    gulp.src('app/js/main.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload())
});

gulp.task('html', () => {
    gulp.src('app/*.html')
        /* .pipe(pug({ pretty:true })) */
        .pipe(gulp.dest('dist'))
});

gulp.task('reloadHTML', () => {
    gulp.src('dist/*.html')
		.pipe(connect.reload())
})

gulp.task('default', ['watch','css', 'html', 'js', 'connect']);

gulp.task('watch', () => {
	gulp.watch('app/scss/**/*.scss', ['css']);
    gulp.watch('app/*.html', ['html']);
	gulp.watch('dist/*.html', ['reloadHTML']);
	gulp.watch('app/js/main.js', ['js']);
});