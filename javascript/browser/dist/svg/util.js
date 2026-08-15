import { NAMESPACE } from "./constants.js";
import { setAttributes } from "../dom/attribute.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function svgElement(tagName, attributes) {
    return setAttributes(document.createElementNS(NAMESPACE, tagName), attributes);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pointToString(point, separator) {
    return `${point.x}${separator}${point.y}`;
}
function pointsToString(points, pointSeparator, pointsSeparator) {
    return points.map(point => pointToString(point, pointSeparator)).join(pointsSeparator);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { svgElement, pointToString, pointsToString };
