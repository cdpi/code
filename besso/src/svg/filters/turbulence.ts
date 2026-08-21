
import { feFilter, type Output } from "./filter.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type TurbulenceType = "fractalNoise" | "turbulence";

function feTurbulence(type:TurbulenceType, baseFrequency:number|string, numOctaves:number, result:Output):SVGFETurbulenceElement
	{
	return feFilter<SVGFETurbulenceElement>("feTurbulence", {type, baseFrequency, numOctaves, result});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type TurbulenceType,

	feTurbulence
	};
