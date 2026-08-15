//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ALL = "link[rel~='stylesheet'][title]";
const ACTIVE = "link[rel~='stylesheet']:not(disabled)[title]";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAll() {
    const all = new Array();
    document.querySelectorAll(ALL).forEach((link) => {
        all.push(link.title);
    });
    return all;
}
function getActiveStyleSheet() {
    const link = document.querySelector(ACTIVE);
    return link ? link.title : null;
}
function setActiveStyleSheet(title) {
    document.querySelectorAll(ALL)
        .forEach((link) => link.disabled = link.title !== title);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getAll, getActiveStyleSheet, setActiveStyleSheet };
