
import { toHex } from "zinal/util/string.js";

//import { RedGreenBlue } from "../image/color.js";
//import { pack888 } from "../util/byte.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function colorToHex(color:number):string
	{
	return "#" + toHex(color, true, 6);
	}

/*
function rgbToHex(color:RedGreenBlue):string
	{
	return colorToHex(pack888([color.red, color.green, color.blue]));
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	colorToHex
	//rgbToHex
	};
