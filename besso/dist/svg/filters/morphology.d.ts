import { type Input, type Output } from "./filter.js";
type MorphologyOperator = "erode" | "dilate";
declare function feMorphology(in1: Input, operator: MorphologyOperator, radius: number | string, result: Output): SVGFEMorphologyElement;
export { type MorphologyOperator, feMorphology };
