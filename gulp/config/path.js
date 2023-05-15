const pathSrc = "./src";
const pathDest = "./dist";

export default {
    root: pathDest,

    html: {
        src: pathSrc + "/pages/*.html",
        watch: [pathSrc + "/pages/*.html", pathSrc + "/blocks/**/*.html"],
        dest: pathDest,
    },

    scss: {
        src: pathSrc + "/styles/*.scss",
        watch: [pathSrc + "/styles/*.scss", pathSrc + "/styles/**/*.scss", pathSrc + "/blocks/**/*.scss"],
        dest: pathDest + "/styles",
    },

    js: {
        src: pathSrc + "/scripts/*.js",
        watch: [pathSrc + "/scripts/*.js", pathSrc + "/scripts/**/*.js", pathSrc + "/blocks/**/*.js"],
        dest: pathDest + "/scripts",
    },

    images: {
        src: [pathSrc + "/images/*.{jpg,jpeg,png,webp,svg}", pathSrc + "/images/**/*.{jpg,jpeg,png,webp,svg}"],
        watch: [pathSrc + "/images/*.{jpg,jpeg,png,webp,svg}", pathSrc + "/images/**/*.{jpg,jpeg,png,webp,svg}"],
        dest: pathDest + "/images",
    },
};
