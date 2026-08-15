import { feFilter } from "./filter.js";
function feMorphology(in1, operator, radius, result) {
    return feFilter("feMorphology", { in1, operator, radiusX: radius, radiusY: radius, result });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { feMorphology };
