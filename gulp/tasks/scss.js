import gulp from "gulp";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cssImport from "gulp-cssimport";

const sass = gulpSass(dartSass);

export default () => {
    return (
        gulp
            .src(path.scss.src)
            .pipe(
                plumber({
                    errorHandler: notify.onError((error) => ({
                        title: "SCSS",
                        message: error.message,
                    })),
                })
            )
            .pipe(concat("styles.scss"))
            .pipe(sass())
            .pipe(cssImport())
            // .pipe(webpCss())
            .pipe(autoprefixer())
            .pipe(groupCssMediaQueries())
            .pipe(gulp.dest(path.scss.dest))
            .pipe(rename({ suffix: ".min" }))
            .pipe(size({ title: "До сжатия" }))
            .pipe(csso())
            .pipe(size({ title: "После сжатия" }))
            .pipe(gulp.dest(path.scss.dest))
    );
};
