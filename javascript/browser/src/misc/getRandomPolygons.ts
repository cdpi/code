
import { IPoint2D, Point2D } from "../geometry/point.js";
import { getRandom } from "../util/random.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getRandomPoints = (rows:number, columns:number, size:number, margin:number):Array<Array<IPoint2D>> =>
	{
	const random = ():number => getRandom(margin, size - margin);

	const points:Array<Array<IPoint2D>> = [];

	for (let row = 0; row < rows + 1; row++)
		{
		points[row] = [];

		for (let column = 0; column < columns + 1; column++)
			{
			const x = random() + column * size;
			const y = random() + row * size;

			points[row][column] = new Point2D(x, y);
			}
		}

	return points;
	}

const getRandomPolygons = (rows:number, columns:number, size:number, margin:number):Array<Array<Array<IPoint2D>>> =>
	{
	const points = getRandomPoints(rows, columns, size, margin);

	const polygons:Array<Array<Array<IPoint2D>>> = [];

	for (let row = 0; row < rows; row++)
		{
		polygons[row] = [];

		for (let column = 0; column < columns; column++)
			{
			const polygon = [];

			polygon.push(points[row][column]);
			polygon.push(points[row][column + 1]);
			polygon.push(points[row + 1][column + 1]);
			polygon.push(points[row + 1][column]);

			polygons[row][column] = polygon;
			}
		}

	return polygons;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getRandomPoints,
	getRandomPolygons
	};
