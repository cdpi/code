import { type RedGreenBlue } from "zinal/image/color.js";
type NamedColors = Record<string, RedGreenBlue>;
declare function wikipediaParseWebColors(): Promise<NamedColors>;
export { type NamedColors, wikipediaParseWebColors };
