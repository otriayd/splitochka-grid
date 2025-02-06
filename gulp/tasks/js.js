import webpack from "webpack-stream"
import babel from "gulp-babel"

export const js = () => {
	return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "JS",
			message: "Error: <%= error.message %>"
	})))
	.pipe(babel({
		presets: ['@babel/env']
  	}))
	.pipe(webpack({
		mode: app.isBuild ? 'production' : 'development',
		entry: {
			app: './src/js/app.js',
			//contacts: './src/js/contacts.js'
		},
		output: {
			filename: '[name].min.js'
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: '/node_modules/'
				}
			]
		}
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.plugins.browsersync.stream())
}