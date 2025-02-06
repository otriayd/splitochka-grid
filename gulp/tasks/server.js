export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`,
			index: 'product.html'
		},
		notify: true,
		port: 3000,
	})
}