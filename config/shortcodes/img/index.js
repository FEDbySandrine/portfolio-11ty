const img = (filename, alt="", width="100%", height="100%", lazy=true, ext="jpg", classname="") => {
    var img_data = "";
    if(alt == "") { img_data +=" aria-hidden=\"true\""; }
    if(lazy) { img_data +=" loading=\"lazy\""; }
    if(classname) { img_data +=" class=\"" + classname+ "\""; }
    return `
        <img src="/assets/images/${filename}.${ext}" alt="${alt}" ${img_data} width="${width}" height="${height}">
    `;
};
module.exports = img;