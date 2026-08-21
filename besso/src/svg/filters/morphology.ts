
import { feFilter, type Input, type Output } from "./filter.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type MorphologyOperator = "erode" | "dilate";

function feMorphology(in1:Input, operator:MorphologyOperator, radius:number|string, result:Output):SVGFEMorphologyElement
	{
	return feFilter<SVGFEMorphologyElement>("feMorphology", {in1, operator, radiusX: radius, radiusY: radius, result});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type MorphologyOperator,

	feMorphology
	};
