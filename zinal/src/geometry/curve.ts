
import { IPoint2D, Point2D } from "./point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Curve
	{
	public static getControlPoints(before:IPoint2D, from:IPoint2D, to:IPoint2D, after:IPoint2D, tension:number):Array<IPoint2D>
		{
		const x1:number = from.x + (to.x - before.x) * tension;
		const y1:number = from.y + (to.y - before.y) * tension;

		const x2:number = to.x - (after.x - from.x) * tension;
		const y2:number = to.y - (after.y - from.y) * tension;

		return new Array<IPoint2D>(new Point2D(x1, y1), new Point2D(x2, y2));
		}

	public static getControlPoints2(before:IPoint2D, from:IPoint2D, to:IPoint2D, after:IPoint2D, tension:number):Array<IPoint2D>
		{
		const d1:IPoint2D = before.delta(to).tension(tension);
		const d2:IPoint2D = from.delta(after).tension(tension);

		const cp1:IPoint2D = new Point2D(from.x + d1.x, from.y + d1.y);
		const cp2:IPoint2D = new Point2D(to.x - d2.x, to.y - d2.y);

		return new Array<IPoint2D>(cp1, cp2);
		}

	/*
	public static toBezier(from:IPoint, to:IPoint, tension:number):Array<IPoint>
		{
		const dx:number = to.x - from.x;
		const dy:number = to.y - from.y;

		const controlPointFrom:IPoint = new Point(from.x + dx * tension, from.y);
		const controlPointTo:IPoint = new Point(to.x - dy * tension, to.y);

		return new Array<IPoint>(from, controlPointFrom, controlPointTo, to);
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Curve
	};
