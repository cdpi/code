
import { type RedGreenBlue } from "zinal/image/color.js";
import { getWikiText } from "./api.js";
import { type ColorData, wikiParseColors } from "zinal/wiki/parser/colors.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type NamedColors = Record<string, RedGreenBlue>;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const reducer = (namedColors:NamedColors, colorData:ColorData):NamedColors =>
	{
	namedColors[colorData.name.toLowerCase()] =
		{
		red: colorData.rgb.red,
		green: colorData.rgb.green,
		blue: colorData.rgb.blue
		};

	return namedColors;
	};

async function wikipediaParseWebColors():Promise<NamedColors>
	{
	const wikitext:string = await getWikiText("Couleur_du_Web", 3);

	const colors:Array<ColorData> = wikiParseColors(wikitext);

	return colors.reduce(reducer, {} as NamedColors);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type NamedColors,

	wikipediaParseWebColors
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(JSON.stringify(namedColors, null, "\t"));
//wikipediaParseWebColors().then((namedColors:NamedColors) => console.log(namedColors));
