import replace from 'gulp-replace' // поиск и замена
import browserSync from 'browser-sync' // локальный сервер
import newer from 'gulp-newer' // Проверка обновления для картинок
import ifPlugin from 'gulp-if'

export const plugins = {
  replace: replace,
  browserSync: browserSync,
  newer: newer,
  ifPlugin: ifPlugin,
}