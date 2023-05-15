import gulp from "gulp";
import browserSync from "browser-sync";

// Кофигурация
import path from "./gulp/config/path.js";

// Задачи
import clear from "./gulp/tasks/clear.js";
import html from "./gulp/tasks/html.js";
import scss from "./gulp/tasks/scss.js";
import js from "./gulp/tasks/js.js";
import images from "./gulp/tasks/images.js";

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
        },
    });
};

// Наблюдение
const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.images.watch, images).on("all", browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(html, scss, js, images));
const dev = gulp.series(build, gulp.parallel(server, watcher));

export { clear };
export { html };
export { scss };
export { js };
export { images };

export default dev;
