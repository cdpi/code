import { getWikiText } from "./api.js";
import { wikiParseColors } from "../wiki/parser/colors.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const reducer = (namedColors, colorData) => {
    namedColors[colorData.name.toLowerCase()] =
        {
            red: colorData.rgb.red,
            green: colorData.rgb.green,
            blue: colorData.rgb.blue
        };
    return namedColors;
};
async function wikipediaParseWebColors() {
    const wikitext = await getWikiText("Couleur_du_Web", 3);
    const colors = wikiParseColors(wikitext);
    return colors.reduce(reducer, {});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { wikipediaParseWebColors };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log(JSON.stringify(namedColors, null, "\t"));
//wikipediaParseWebColors().then((namedColors:NamedColors) => console.log(namedColors));
