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
    return gulp.src('app/dist/js/es5/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/dist/js/es6/'));
});

gulp.task('scripts', function() {
  return gulp.src([
  	//'app/dist/js/bootstrap.min.js',
  	//'app/dist/js/shabloniz.js',
  	'app/dist/js/es6/*.js',
  	])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/dist/js/'));
});


gulp.task('compress', function (cb) {
  pump([
      gulp.src('app/dist/js/all.js'),
      uglify(),
      gulp.dest('app/dist/scripts')
    ],
    cb
  );
});





gulp.task('sass', () =>
    sass('app/dist/sass/*.scss')
        .on('error', sass.logError)
        .pipe(concat('compile.css'))
        .pipe(gulp.dest('app/dist/css/'))
);


gulp.task('watch', ['default', 'scripts'], function(){
  gulp.watch('app/dist/sass/*.scss', ['sass']); 
  // Other watchers
});



gulp.task('build', ['clean','scripts', 'sass', 'compress'], function() {

		var buildCss = gulp.src([ // Переносим CSS стили в продакшен
	        'app/dist/css/compile.css'
	        ])
	    	.pipe(gulp.dest('realise/dist/css'))

	    var buildFonts = gulp.src('app/dist/fonts/**/*') // Переносим шрифты в продакшен
		    .pipe(gulp.dest('realise/dist/fonts'))

		    var buildJs = gulp.src(['app/dist/scripts/all.js', 'app/dist/js/bootstrap.min.js' , 'app/dist/js/shabloniz.js']) // Переносим скрипты в продакшен
		    .pipe(gulp.dest('realise/dist/scripts'))


	    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	    .pipe(gulp.dest('realise'));

	});