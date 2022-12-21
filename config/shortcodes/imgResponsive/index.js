const imgResponsive = (filename, width="100%", height="100%", alt="", rules="", lazy=true, ext="jpg") => {
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
};
module.exports = imgResponsive;