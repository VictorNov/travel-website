// Получаем имя папки проекта

import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./docs`
const srcFolder = `./src`

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/assets/img`,
    fonts: `${buildFolder}/assets/fonts/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/assets/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    js2: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/assets/img/**/*.svg`,
    sass: `${srcFolder}/sass/style.sass`,
    css: `${srcFolder}/css/*.css`,
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/assets/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    sass: `${srcFolder}/**/*.sass`,
    css: `${srcFolder}/css/*.css`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/assets/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `./domains/victor-nov.ru/public_html`,
}