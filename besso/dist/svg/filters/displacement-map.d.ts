import { type Input, type Output } from "./filter.js";
type ChannelSelector = "R" | "G" | "B" | "A";
declare function feDisplacementMap(in1: Input, in2: Input, scale: number | string, xChannelSelector: ChannelSelector, yChannelSelector: ChannelSelector, result: Output): SVGFEDisplacementMapElement;
export { type ChannelSelector, feDisplacementMap };
