const srcFolder = "./src";
const buildFolder = "./build";

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder
  },
  srcSvg: `${srcFolder}/img/svg/**.svg`,
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcScss: `${srcFolder}/scss/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcBlocksFolder: `${srcFolder}/blocks`,
  resourcesFolder: `${srcFolder}/resources`
};
