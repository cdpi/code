import { type RedGreenBlue } from "zinal/image/color.js";
type WebColors = Record<string, RedGreenBlue>;
declare function readWebColors(path: string): WebColors;
export { type WebColors, readWebColors };
