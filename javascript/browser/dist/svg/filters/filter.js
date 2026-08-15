import { svgElement } from "../util.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Source;
(function (Source) {
    Source[Source["SourceGraphic"] = 0] = "SourceGraphic";
    Source[Source["SourceAlpha"] = 1] = "SourceAlpha";
})(Source || (Source = {}));
function feFilter(filterName, attributes) {
    return svgElement(filterName, attributes);
}
function filter(attributes) {
    return svgElement("filter", attributes);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Source, feFilter, filter };
