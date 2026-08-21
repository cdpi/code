import { feFilter } from "./filter.js";
function feTurbulence(type, baseFrequency, numOctaves, result) {
    return feFilter("feTurbulence", { type, baseFrequency, numOctaves, result });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { feTurbulence };
