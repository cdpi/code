//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function alphabet(upperCase = false) {
    const start = upperCase ? 65 : 97;
    return Array.from({ length: 26 }, (_value, index) => String.fromCharCode(start + index));
}
function after(upperCase = false) {
    const letters = alphabet(upperCase);
    return letters.map(letter => letters.map(letterAfter => `${letter}${letterAfter}`));
}
function glyphToEntity(glyph) {
    return `&#${parseInt(glyph, 16)};`;
}
function glyphToHTML(glyph) {
    return `<div class="glyph"><span>${glyphToEntity(glyph)}</span></div>`;
}
async function glyphs(url) {
    const response = await fetch(url);
    const font = await response.json();
    const html = Object.getOwnPropertyNames(font.glyphs).map(glyphToHTML).join("\n");
    //document.getElementById("glyphs")!.innerHTML = html;
    return html;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { alphabet, after, glyphToEntity, glyphToHTML, glyphs };
