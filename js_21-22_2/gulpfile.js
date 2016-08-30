var gulp 		=	require('gulp');
const babel 	=	require('gulp-babel');
var uglify 		= 	require('gulp-uglify');
var pump 		= 	require('pump');
const sass 		= 	require('gulp-ruby-sass');
var concat 		= 	require('gulp-concat');
var watch 		= 	require('gulp-watch');
var build 		= 	require('gulp-build');
var  del        = 	require('del');


gulp.task('clean', function() {
	    return del.sync('realise'); // Удаляем папку dist перед сборкой
	});

gulp.task('default', () => {
    return gulp.src('src/js/es6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/js/es5/'));
});

gulp.task('scripts', function() {
  return gulp.src([
  	'src/js/es5/*.js',
  	])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('src/js/concat'));
});


gulp.task('compress', function (cb) {
  pump([
      gulp.src('src/js/concat/all.js'),
      uglify(),
      gulp.dest('src/js/')
    ],
    cb
  );
});





gulp.task('sass', () =>
    sass('src/sass/*.scss')
        .on('error', sass.logError)
        .pipe(concat('compile.css'))
        .pipe(gulp.dest('src/css/'))
);


gulp.task('watch', ['default', 'scripts'], function(){
  gulp.watch('src/sass/*.scss', ['sass']); 
  // Other watchers
});



gulp.task('build', ['clean','scripts', 'sass', 'compress'], function() {

		var buildCss = gulp.src([ // Переносим CSS стили в продакшен
	        'src/css/compile.css'
	        ])
	    	.pipe(gulp.dest('dist/css'))

	    var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		    .pipe(gulp.dest('dist/fonts'))

		    var buildJs = gulp.src(['src/js/*.js']) // Переносим скрипты в продакшен
		    .pipe(gulp.dest('dist/js'))


	    var buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
	    .pipe(gulp.dest('dist'));

	});