import gulp from "gulp"

import { path } from './gulp/config/path.js'
import { plugins } from "./gulp/config/plugins.js"

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js"
import { copyLibs } from "./gulp/tasks/copyLibs.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"
import { svgSprive } from "./gulp/tasks/svgSprive.js"

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.libs, copyLibs)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.images, images)
}

export { svgSprive }
export { dev }
export { build }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.series(fonts, gulp.parallel(copy, copyLibs, html, scss, js, images))
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher))
const build = gulp.series(reset, mainTasks)


gulp.task('default', dev)


// npm run dev
// npm run build
// npm run svgSprite

// @@include('html/head', {
// "title": "Главная"
// })

// Path example <img src="@img/">


// %exampleborder{ border-bottom: 5px dashed red}
// @extend %exampleborder;

// @mixin name($f){ font-size: $f}
// @include name(custom)

// commenting = //

