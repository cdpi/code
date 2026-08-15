import { feFilter } from "./filter.js";
function feDisplacementMap(in1, in2, scale, xChannelSelector, yChannelSelector, result) {
    return feFilter("feDisplacementMap", { in: in1, in2, scale, xChannelSelector, yChannelSelector, result });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { feDisplacementMap };
