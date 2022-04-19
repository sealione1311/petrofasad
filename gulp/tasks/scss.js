import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
const sass = gulpSass(dartSass);
export const scss = () => {
  return app.gulp.src(app.path.src.scss, {soursemaps: true})
  .pipe(app.plugins.replace(/@img\//g, 'img/'))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(groupCssMediaQueries())
  .pipe(webpcss({
    webpClass: '.webp',
    noWebpClass: '.no-webp'
  }))
  .pipe(autoprefixer({
    grid: 'true',
    overrideBrowsersList: ['last 3 versions'],
    cascade: 'true'
  }))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(cleanCss())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browsersync.stream())
}
