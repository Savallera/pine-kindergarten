import gulp from "gulp";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";

export default () => {
    return gulp
        .src(path.documents.src)
        .pipe(
            plumber({
                errorHandler: notify.onError((error) => ({
                    title: "DOCUMENTS",
                    message: error.message,
                })),
            })
        )
        .pipe(newer(path.documents.dest))
        .pipe(gulp.dest(path.documents.dest));
};
