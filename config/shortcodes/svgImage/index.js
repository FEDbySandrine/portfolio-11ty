const svgImage = (filename, width, height, alt, rules="") => {
    var icon_data = "";
    if( rules != "" ) { icon_data += " class=\"" + rules + "\"";}
    return `<span class="sr-only">${alt}</span><svg role="img" aria-hidden="true" width="${width}" height="${height}" ${icon_data}><use xlink:href="#svg-${filename}"></use></svg>`;
};
module.exports = svgImage;