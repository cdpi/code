
import { TWOPI } from "./constants.js";
import { IPoint2D, Point2D } from "./point.js";
import { type RadiusModifier, getRandomRadiusModifier } from "./radius.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon
	{
	constructor(public readonly n:number)
		{
		}

	public getVertices(cx:number, cy:number, radius:number, modifier:RadiusModifier|null = null):Array<IPoint2D>
		{
		const vertices:Array<IPoint2D> = new Array<IPoint2D>();

		const step:number = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const angle:number = i * step;

			let newRadius:number = radius;

			if (modifier)
				{
				newRadius = modifier(newRadius, angle, i);
				}

			const x = cx + Math.cos(angle) * newRadius;
			const y = cy + Math.sin(angle) * newRadius;

			vertices.push(new Point2D(x, y));
			}

		return vertices;
		}

	public getRandomVertices(cx:number, cy:number, radius:number, minimum:number, maximum:number):Array<IPoint2D>
		{
		return this.getVertices(cx, cy, radius, getRandomRadiusModifier(maximum, maximum));
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Polygon
	};
