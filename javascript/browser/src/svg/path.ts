
import { IPoint2D } from "../geometry/point.js";
import { Curve } from "../geometry/curve.js";
import { ICommand, MoveTo, CurveTo, ClosePath } from "./command.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Path
	{
	protected readonly commands:Array<ICommand>;

	public constructor()
		{
		this.commands = new Array<ICommand>();
		}

	public moveTo(point:IPoint2D):this
		{
		this.commands.push(new MoveTo(point));

		return this;
		}

	public curveTo(points:Array<IPoint2D>):this
		{
		this.commands.push(new CurveTo(points[0], points[1], points[2]));

		return this;
		}

	public closePath():this
		{
		this.commands.push(new ClosePath());

		return this;
		}

	public toString():string
		{
		return this.commands.map(command => command.toString()).join(" ");
		}

	public static getCurvedPathFromPoints(points:Array<IPoint2D>, tension:number = 0.2):Path
		{
		const path:Path = new Path();

		const n:number = points.length;

		path.moveTo(points[0]);

		for (let i = 0; i < n; i++)
			{
			const point1:IPoint2D = points[(i - 1 + n) % n];
			const point2:IPoint2D = points[i];
			const point3:IPoint2D = points[(i + 1) % n];
			const point4:IPoint2D = points[(i + 2) % n];

			const controlPoints:Array<IPoint2D> = Curve.getControlPoints(point1, point2, point3, point4, tension);

			//commands.push(new CurveTo(controlPoints[0], controlPoints[1], point3));
			path.curveTo([controlPoints[0], controlPoints[1], point3]);
			}

		path.closePath();

		return path;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function polygonToPath(points:Array<IPoint>, tension:number = 0.2):string
	{
	return Path.curved(points, tension).map(command => command.toString()).join(" ");
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Path
	};
