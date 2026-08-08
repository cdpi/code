
import { feFilter, type Input, type Output } from "./filter.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ChannelSelector = "R" | "G" | "B" | "A";

function feDisplacementMap(in1:Input, in2:Input, scale:number|string, xChannelSelector:ChannelSelector, yChannelSelector:ChannelSelector, result:Output):SVGFEDisplacementMapElement
	{
	return feFilter<SVGFEDisplacementMapElement>("feDisplacementMap", {in: in1, in2, scale, xChannelSelector, yChannelSelector, result});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type ChannelSelector,

	feDisplacementMap
	};
