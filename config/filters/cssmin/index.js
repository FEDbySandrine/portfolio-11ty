const CleanCSS = require("clean-css");
const cssmin = (code) => {
    return new CleanCSS({}).minify(code).styles;
};
module.exports = cssmin;