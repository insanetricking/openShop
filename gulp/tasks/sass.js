const sass = require('gulp-sass')(require('sass'));

module.exports = () =>
    $.gulp.task('style', () =>
        $.gulp.src($.path.src.style)
        .pipe(sass())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.groupCssMediaQueries())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe($.gp.rename('main.min.css'))
        .pipe($.gulp.dest($.path.build.style)).on('end', $.bs.reload)
    )