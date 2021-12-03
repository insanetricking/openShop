module.exports = () =>
    $.gulp.task('html', () =>
        $.gulp.src($.path.src.html)
        .pipe($.gp.include())
        .pipe($.gp.pug())
        .pipe($.gulp.dest($.path.build.html)).on('end', $.bs.reload))