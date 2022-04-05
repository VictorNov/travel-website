import fileInclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import pug from 'gulp-pug'

export const html = () => {
  return app.gulp.src(app.path.src.html)
    //.pipe(fileInclude()) Нужен, если работаем с html-modules, а не pug
    .pipe(pug({
      pretty: true,
      verbose: true,
    }))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webpHtmlNosvg()
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ],
        },
        'output': {
          'file': 'gulp/version.json',
        }
      })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}