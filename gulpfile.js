

global.$ = {
    // require - это метод подключающий плагины
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(), /* этот плагин запускает все плагины связанные с gulp */
    bs: require('browser-sync').create(), /* проверяет файлы и запускает проект */

    path: { /* pfth - подключает пути работы gulp'a */
        tasks: require('./gulp/config/tasks'), /* Отдает данные в виде массива */
        serverDir: './app/build', /* папка конечного результата нашего проекта. Создает самостоятельно */

        src: { /* Даем понимание что откуда подключать */
            html: './app/src/*.{html,pug,jade}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.js',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },

        build: { /* Построенная версия */
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/script/',
            img: './app/build/images/',
            fonts: './app/build/fonts/'
        },

        watch: { /* говорим за чем нужно отслеживать */
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],                           ///////////////////////////
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.*',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/*.*'
        }
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)()); /* Перебираем по массиву и запускаем плагины */
$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts', 'serve', 'watch')));    ///////////////////////////
/* Ставим задачи gulp'y что нужно делать по умолчанию */
$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts')));                        ///////////////////////////
/* Ставим задачи для построенной версии проекта */

