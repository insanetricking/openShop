module.exports = () =>
    $.gulp.task('js', () =>
        $.gulp.src($.path.src.js)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('all.js'))
            .pipe($.gp.include())
            .pipe($.gp.babel())
            .pipe($.gp.rename('all.min.js'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.path.build.js)).on('end', $.bs.reload)) 