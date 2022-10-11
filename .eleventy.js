const svgSprite = require("eleventy-plugin-svg-sprite");
const { minify } = require("terser");


module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addWatchTarget("./src/js");
  eleventyConfig.addWatchTarget("./src/assets");
  // eleventyConfig.addPassthroughCopy("./src/css");
  // eleventyConfig.addPassthroughCopy("./src/js/vendors");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg", // relative path to SVG directory
    // (MUST be defined when initialising plugin)
  });
  eleventyConfig.addShortcode("svgImage", function(filename, width, height, alt, rules="") {
    var icon_data = "";
    if( rules != "" ) { icon_data += " class=\"" + rules + "\"";}
    return `<span class="sr-only">${alt}</span><svg role="img" aria-hidden="true" width="${width}" height="${height}" ${icon_data}><use xlink:href="#svg-${filename}"></use></svg>`;
  });
  eleventyConfig.addShortcode("svgIcon", function(filename, width, height, alt, rules="") {
    var icon_data = "";
    if( rules != "" ) { icon_data += " class=\"" + rules + "\"";}
    return `<svg role="img" aria-hidden="true" width="${width}" height="${height}" ${icon_data}><use xlink:href="#svg-${filename}"></use></svg>`;
  });


  eleventyConfig.addShortcode("imgResponsive", function(filename, width="100%", height="100%", alt="", rules="", lazy=true, ext="jpg") {
    var picture_data = "";
    if( rules != "" ) { picture_data += " class=\"" + rules + "\"";}

    return (
      '<picture'+ `${picture_data}` +'>' +
        '<source media="(min-width: 460px)" srcset="/assets/images/' + `${filename}` + '.webp" type="image/webp">' +
        '<source media="(min-width: 460px)" srcset="/assets/images/' + `${filename}` + '.' + `${ext}` + '" type="image/jpeg">' +
        '<source media="(max-width: 459px)" srcset="/assets/images/' + `${filename}` + '.sm.webp" srcset="/assets/images/' + `${filename}` + '.sm@2x.webp" type="image/webp">' +
        '<img src="/assets/images/' + `${filename}` + '.sm.' + `${ext}` + '" srcset="/assets/images/' + `${filename}` + '.sm@2x.' + `${ext}` + ' 2x" alt="' + `${alt}` + '"' + (alt=="" ? ' aria-hidden="true"' : '') + (lazy ? ' loading="lazy"' : '') + ' width="' + `${width}` + '" height="' + `${height}` + '">' +
      '</picture>'
    );
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
