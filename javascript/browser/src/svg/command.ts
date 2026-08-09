
import { IPoint2D } from "../geometry/point.js";
import { pointToString, pointsToString } from "./util.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const point = (point:IPoint2D):string => pointToString(point, " ");
const points = (points:Array<IPoint2D>):string => pointsToString(points, " ", ",");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type Type = "M" | "L" | "C" | "Q" | "Z";
type Type = "M" | "C" | "Z";

interface ICommand
	{
	type:Type;
	}

abstract class Command<T> implements ICommand
	{
	public abstract type:Type;
	public readonly value:T;

	constructor(value:T)
		{
		this.value = value;
		}
	}

class MoveTo extends Command<IPoint2D>
	{
	public readonly type:Type = "M";

	public constructor(point:IPoint2D)
		{
		super(point);
		}

	public toString():string
		{
		return `${this.type} ${point(this.value)}`;
		}
	}

class CurveTo extends Command<Array<IPoint2D>>
	{
	public readonly type:Type = "C";

	public constructor(controlPointFrom:IPoint2D, controlPointTo:IPoint2D, to:IPoint2D)
		{
		super(new Array<IPoint2D>(controlPointFrom, controlPointTo, to));
		}

	public toString():string
		{
		return `${this.type} ${points(this.value)}`;
		}
	}

class ClosePath extends Command<void>
	{
	public readonly type:Type = "Z";

	public toString():string
		{
		return this.type;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type Type,

	ICommand,

	Command,
	MoveTo,
	CurveTo,
	ClosePath
	};
