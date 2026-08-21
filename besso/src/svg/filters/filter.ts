
import { type Attributes } from "../../dom/attribute.js";
import { svgElement } from "../util.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

enum Source
	{
	SourceGraphic,
	SourceAlpha
	}

type SourceName = Source | string;

type Input = SourceName;

type Output = SourceName;

function feFilter<T extends SVGElement>(filterName:string, attributes?:Attributes):T
	{
	return svgElement<T>(filterName, attributes);
	}

function filter(attributes?:Attributes):SVGFilterElement
	{
	return svgElement<SVGFilterElement>("filter", attributes);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Source,

	type SourceName,
	type Input,
	type Output,

	feFilter,
	filter
	};
