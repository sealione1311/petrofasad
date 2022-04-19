import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  .pipe(fonter({
    formats: ['woff']
  }))
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

