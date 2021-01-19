"use strict";

// INCLUDES

// Gulp
const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");
const rename = require("gulp-rename");

// Markup
const htmlmin = require("gulp-htmlmin");

// Styles
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");

// Scripts
const uglify = require("gulp-uglify");

// Images
var imageResize = require("gulp-image-resize");
var parallelImage = require("concurrent-transform");
var os = require("os");

// Paths
const { paths } = require("./package.json");

// TASKS

// Delete ./dist/ folder
const clean = () => del(paths.generic.dest);
exports.clean = clean;
exports.clean.description = "Delete dist/ folder";

// Markup
// Minify markup and place in ./dist/
const markup = () =>
  src(paths.markup.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.markup.dest));

// Styles
// minify and place in ./dist/css
const styles = () =>
  src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat("main.min.css"))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());

// Scripts
// Minify scripts and place in ./dist/js
const scripts = () =>
  src(paths.scripts.src)
    .pipe(dest(paths.scripts.dest)) //.pipe(uglify()) cant do this yet because of multiline text
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(paths.scripts.dest));

// Files
// Copy assets to ./dist/
const copyFiles = () => src(paths.files.src).pipe(dest(paths.files.dest));

// Assets
// Copy assets to ./dist/
const copyImages = () =>
  src(paths.copyImages.src).pipe(dest(paths.copyImages.dest));

// Image Resize One Time
const resizeImagesOnce = () =>
  src(paths.oneTimeImages.src)
    .pipe(
      parallelImage(
        imageResize({ width: 720, format: "jpeg" }),
        os.cpus().length
      )
    )
    .pipe(dest(paths.oneTimeImages.dest));
exports.oneTimeImage = resizeImagesOnce;

// Image Resize
const resizeImages = () =>
  src(paths.images.src)
    .pipe(parallelImage(imageResize({ width: 1080 }), os.cpus().length))
    .pipe(dest(paths.images.dest));
exports.test = resizeImages;

// Image Resize and PNG to JPEG
const resizeImagesPNG = () =>
  src(paths.pngs.src)
    .pipe(
      parallelImage(
        imageResize({ width: 1080, format: "jpeg" }),
        os.cpus().length
      )
    )
    .pipe(dest(paths.pngs.dest));

exports.png = resizeImagesPNG;

// Image Resize and PNG to JPEG
const copyLargeImages = () =>
  src(paths.largeImages.src)
    .pipe(
      parallelImage(
        imageResize({ width: 2400, format: "jpeg" }),
        os.cpus().length
      )
    )
    .pipe(dest(paths.largeImages.dest));
exports.large = copyLargeImages;

exports.png = resizeImagesPNG;

// Unsupported Images
const copyUnsupportedImages = () =>
  src(paths.unsupportedImages.src).pipe(dest(paths.images.dest));
exports.unsupported = copyUnsupportedImages;

// Image Clean
const cleanImages = () => del(paths.images.dest);
exports.cleanImages = cleanImages;

exports.image = series(
  cleanImages,
  resizeImages,
  resizeImagesPNG,
  copyUnsupportedImages,
  copyLargeImages
);

// Build
const build = parallel(markup, styles, scripts, copyFiles, copyImages);
exports.build = series(clean, build);
exports.build.description = "Clean, build ";

// Watch
const watchFiles = done => {
  browserSync.init({ server: { baseDir: paths.generic.dest } });
  watch(paths.markup.src).on("change", series(markup, browserSync.reload));
  watch(paths.styles.src, styles);
  watch(paths.scripts.src).on("change", series(scripts, browserSync.reload));
  // watch(paths.assets.src).on("change", series(assets, browserSync.reload));
  done();
};

watchFiles.displayName = "Watch";
exports.default = series(clean, build, watchFiles);
exports.default.description = "Clean, build, watch src/ folder";
