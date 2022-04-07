export const copyCss = () => {
  return app.gulp.src(app.path.src.css)
    .pipe(app.gulp.dest(app.path.build.css))
}

export const copyJs = () => {
  return app.gulp.src(app.path.src.js2)
    .pipe(app.gulp.dest(app.path.build.js))
}

export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}