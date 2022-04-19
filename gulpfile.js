import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { clear } from "./gulp/tasks/clear.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { plugins } from "./gulp/config/plugins.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";

//передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
};

//выполнение сценария наблюдения за изменениями
function watch() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, images);

};

const mainTasks = gulp.parallel(copy, html, scss, js, images)

//построение сценария  в режиме разработки
const dev = gulp.series(clear, mainTasks, fonts, gulp.parallel(watch, server))

//выполнение сценария  по умолчанию
gulp.task('default', dev);
