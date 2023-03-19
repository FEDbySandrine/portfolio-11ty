const img = (filename, alt="", width="100%", height="100%", lazy=true, ext="jpg", classname="") => {
    var img_data = "";
    if(alt == "") { img_data +=" aria-hidden=\"true\""; }
    if(lazy) { img_data +=" loading=\"lazy\""; }
    if(classname) { img_data +=" class=\"" + classname+ "\""; }
    return `
    <picture>
        <source srcset="/assets/images/${filename}.webp, /assets/images/${filename}@2x.webp 2x" type="image/webp" />
        <img src="/assets/images/${filename}.${ext}" srcset="/assets/images/${filename}@2x.${ext} 2x" alt="${alt}" ${img_data} width="${width}" height="${height}">
    </picture>
    `;
};
module.exports = img;