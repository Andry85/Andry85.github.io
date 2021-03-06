﻿var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename      = require('gulp-rename'), // Подключаем библиотеку для переименования файлов; 
    del         = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache       = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов



	gulp.task('sass', function(){ // Создаем таск "sass"
    	return gulp.src('src/sass/**/*.scss') // Берем источник
	        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
	        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
	        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
	        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
	});



	gulp.task('css-libs', ['sass'], function() {
	    return gulp.src(['src/css/main.css']) // Выбираем файл для минификации
	        .pipe(cssnano()) // Сжимаем
	        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	        .pipe(gulp.dest('src/css')); // Выгружаем в папку src/css
	});

	


	gulp.task('browser-sync', function() { // Создаем таск browser-sync
	    browserSync({ // Выполняем browser Sync
	        server: { // Определяем параметры сервера
	            baseDir: 'src' // Директория для сервера - src
	        },
	        notify: false // Отключаем уведомления
	    });
	});

	gulp.task('img', function() {
	    return gulp.src('src/img/**/*') // Берем все изображения из src
	        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
	            interlaced: true,
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],
	            use: [pngquant()]
	        })))
	        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
	});


	gulp.task('watch', ['browser-sync', 'css-libs'], function() {
	    gulp.watch('src/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
	    gulp.watch('src/*.html', browserSync.reload);
	    gulp.watch('src/js/**/*.js', browserSync.reload);
	    // Наблюдение за другими типами файлов
	});	


	gulp.task('clean', function() {
	    return del.sync('dist'); // Удаляем папку dist перед сборкой
	});

	gulp.task('clear', function() {
	    return cache.clearAll();
	});



	gulp.task('build', ['clean', 'img', 'sass'], function() {

	    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
	        'src/css/main.min.css'
	        ])
	    .pipe(gulp.dest('dist/css'))

	    var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
	    .pipe(gulp.dest('dist/fonts'))

	    var buildJs = gulp.src('src/js/**/*') // Переносим скрипты в продакшен
	    .pipe(gulp.dest('dist/js'))

	    var buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
	    .pipe(gulp.dest('dist'));

	});

