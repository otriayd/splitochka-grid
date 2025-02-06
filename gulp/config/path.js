import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
	build: {
		files: `${buildFolder}/files/`,
		libs: `${buildFolder}/libs/`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		libs: `${srcFolder}/libs/**/*.js`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/*.js`, 
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		libs: `${srcFolder}/libs/**/*.js`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/**/*.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
		js: `${srcFolder}/js/**/*.js`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}