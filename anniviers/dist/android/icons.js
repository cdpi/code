import { readFileSync } from "node:fs";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FILENAME_APPFILTER = "appfilter.xml";
const FILENAME_DRAWABLE = "drawable.xml";
const toDrawableName = (text) => `ic_${text.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
function parse(path, callback) {
    const csv = readFileSync(path, "utf-8");
    const lines = csv.trim().split("\n").sort();
    lines.forEach(line => {
        const [name, pkg, activity] = line.split(",").map(s => s?.trim());
        if (name && pkg && activity) {
            callback(name, pkg, activity, toDrawableName(name));
        }
    });
}
function csvToAppFilter(path) {
    const xml = new Array();
    xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
    xml.push(`<resources>`);
    parse(path, (name, pkg, activity, drawableName) => {
        xml.push(`\t<item component="ComponentInfo{${pkg}/${activity}}" drawable="${drawableName}" />`);
    });
    xml.push(`</resources>`);
    return xml.join("\n");
}
function csvToDrawable(path) {
    const xml = new Array();
    xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
    xml.push(`<resources>`);
    parse(path, (name, pkg, activity, drawableName) => {
        xml.push(`\t<item drawable="${drawableName}" />`);
    });
    xml.push(`</resources>`);
    return xml.join("\n");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { FILENAME_APPFILTER, FILENAME_DRAWABLE, parse, csvToAppFilter, csvToDrawable };
