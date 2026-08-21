
import { NAMESPACE } from "./constants.js";
import { IPoint2D } from "zinal/geometry/point.js";
import { type Attributes, setAttributes } from "../dom/attribute.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function svgElement<T extends SVGElement>(tagName:string, attributes?:Attributes):T
	{
	return setAttributes(document.createElementNS(NAMESPACE, tagName) as T, attributes);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pointToString(point:IPoint2D, separator:string):string
	{
	return `${point.x}${separator}${point.y}`;
	}

function pointsToString(points:Array<IPoint2D>, pointSeparator:string, pointsSeparator:string):string
	{
	return points.map(point => pointToString(point, pointSeparator)).join(pointsSeparator);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	svgElement,
	pointToString,
	pointsToString
	};
