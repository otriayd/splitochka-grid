export const copyLibs = () => {
	return app.gulp.src(app.path.src.libs)
		.pipe(app.gulp.dest(app.path.build.libs))
}