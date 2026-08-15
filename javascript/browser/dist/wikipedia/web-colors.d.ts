import { type RedGreenBlue } from "../image/color.js";
type NamedColors = Record<string, RedGreenBlue>;
declare function wikipediaParseWebColors(): Promise<NamedColors>;
export { type NamedColors, wikipediaParseWebColors };
