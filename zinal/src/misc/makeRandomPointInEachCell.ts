
import { IPoint2D, Point2D } from "../geometry/point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeRandomPointInEachCell(columns:number, rows:number, cellSize:number, margin:number):Array<Array<IPoint2D>>
	{
	const margins = cellSize - 2 * margin;

	const points = new Array<Array<IPoint2D>>();

	for (let row = 0; row < rows; row++)
		{
		points[row] = new Array<IPoint2D>();

		for (let column = 0; column < columns; column++)
			{
			const x = column * cellSize + margin + Math.random() * margins;
			const y = row * cellSize + margin + Math.random() * margins;

			points[row][column] = new Point2D(x, y);
			}
		}

	return points;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	makeRandomPointInEachCell
	};
