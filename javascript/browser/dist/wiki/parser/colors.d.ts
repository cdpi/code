import { type RedGreenBlue } from "../../image/color.js";
type ColorData = {
    source: string;
    name: string;
    hex: string;
    rgb: RedGreenBlue;
};
declare function wikiParseColors(wikitext: string): Array<ColorData>;
export { type ColorData, wikiParseColors };
