
import { getRandom } from "../util/random.js";
import { IPoint2D, Point2D } from "../geometry/point.js";
import { TWOPI } from "../geometry/constants.js";
import { pointToString, pointsToString } from "../svg/util.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon
	{
	readonly n:number;

	constructor(n:number)
		{
		this.n = n;
		}

	getVertices(cx:number, cy:number, r:number):Array<IPoint2D>
		{
		const vertices = new Array<IPoint2D>();

		const pii = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const theta = i * pii;

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point2D(x, y));
			}

		return vertices;
		}

	getRandomVertices(cx:number, cy:number, rmin:number, rmax:number):Array<IPoint2D>
		{
		const vertices = new Array<IPoint2D>();

		const pii = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const theta = i * pii;

			const r = getRandom(rmin, rmax);

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point2D(x, y));
			}

		return vertices;
		}

	getSVG(cx:number, cy:number, r:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = pointsToString(this.getVertices(cx, cy, r), " ", " ");

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}

	getRandomSVG(cx:number, cy:number, rmin:number, rmax:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = pointsToString(this.getRandomVertices(cx, cy, rmin, rmax), " ", " ");

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}
	}

class Hexagon extends Polygon
	{
	constructor()
		{
		super(6);
		}

	/*
	getVertices(cx:number, cy:number, r:number):Array<Point>
		{
		const vertices = new Array<Point>();

		for (let i = 0; i < 6; i++)
			{
			const theta = i * (TWOPI / 6);

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point(x, y));
			}

		return vertices;
		}
	*/

	/*
	getSVG(cx:number, cy:number, r:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = this.getVertices(cx, cy, r).map(p => `${p.x},${p.y}`).join(" ");

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}
	*/
	}

class Island
	{
	constructor()
		{
		}
	}

export
	{
	Polygon,
	Hexagon,
	Island
	};
