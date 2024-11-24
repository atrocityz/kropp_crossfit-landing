import gulp from "gulp";
import browserSync from "browser-sync";

import { paths } from "./gulp/config/paths.js";
import { clean } from "./gulp/tasks/clean.js";
import { svgSprites } from "./gulp/tasks/sprite.js";
import { styles } from "./gulp/tasks/styles.js";
import { stylesMinify } from "./gulp/tasks/stylesMinify.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { resources } from "./gulp/tasks/resources.js";
import { images } from "./gulp/tasks/images.js";
import { webpImages } from "./gulp/tasks/webp.js";
import { htmlInclude } from "./gulp/tasks/html-include.js";
import { cacheTask } from "./gulp/tasks/cache.js";
import { rewrite } from "./gulp/tasks/rewrite.js";
import { htmlMinify } from "./gulp/tasks/html-minify.js";
import { zipFiles } from "./gulp/tasks/zip.js";

global.app = {
  gulp,
  isProd: process.argv.includes("--build"),
  paths
};

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: `${app.paths.base.build}`
    },
    notify: false,
    port: 3000
  });

  gulp.watch(app.paths.srcScss, styles);
  gulp.watch(`${app.paths.srcBlocksFolder}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.base.src}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.resourcesFolder}/**`, resources);
  gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`, images);
  gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
  gulp.watch(app.paths.srcSvg, svgSprites);
};

const dev = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, watcher);
const build = gulp.series(
  clean,
  htmlInclude,
  scripts,
  stylesMinify,
  resources,
  images,
  webpImages,
  svgSprites
  // htmlMinify
);
const cache = gulp.series(cacheTask, rewrite);
const cleanFiles = clean;
const zip = zipFiles;

export { dev };
export { build };
export { cache };
export { cleanFiles };
export { zip };

gulp.task("default", dev);
