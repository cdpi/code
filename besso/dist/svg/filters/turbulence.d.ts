import { type Output } from "./filter.js";
type TurbulenceType = "fractalNoise" | "turbulence";
declare function feTurbulence(type: TurbulenceType, baseFrequency: number | string, numOctaves: number, result: Output): SVGFETurbulenceElement;
export { type TurbulenceType, feTurbulence };
