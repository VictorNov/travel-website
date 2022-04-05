import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const scss = gulpSass(dartSass)

export const sass = () => {
  return app.gulp.src(app.path.src.sass, { sourcemaps: app.isDev })
    .pipe(scss({
      outputStyle: 'expanded',
    }))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        groupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webpcss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        })
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowsersList: ['last 3 versions'],
          cascade: true,
        })
      )
    )
    // Если нужно посмотреть несжатый CSS - раскомментировать следующую строку
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.gulp.dest(app.path.build.css)
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}