// import filters
const {jsmin} = require('./config/filters/index.js');

// import shortcodes
const {img, imgResponsive, svgIcon, svgImage} = require('./config/shortcodes/index.js');

// plugins
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
  // 	-- Custom Watch Targets -----------------------------------
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addWatchTarget("./src/js");
  eleventyConfig.addWatchTarget("./src/assets");

  // 	-- Pass-through copy for static assets ---------------------
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/docs");
  // eleventyConfig.addPassthroughCopy("./src/js/vendors");

  // 	-- Custom filters ------------------------------------------
  eleventyConfig.addNunjucksAsyncFilter("jsmin", jsmin);

  // 	-- Custom shortcodes ---------------------------------------
  eleventyConfig.addShortcode("img", img); 
  eleventyConfig.addShortcode("imgResponsive", imgResponsive);
  eleventyConfig.addShortcode("svgIcon", svgIcon);
  eleventyConfig.addShortcode("svgImage", svgImage);

  // 	-- Plugins ------------------------------------------------
  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg", // relative path to SVG directory
    // (MUST be defined when initialising plugin)
  });

  // 	-- General config ------------------------------------------
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
