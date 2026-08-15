import { Point2D } from "../geometry/point.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeRandomPointInEachCell(columns, rows, cellSize, margin) {
    const margins = cellSize - 2 * margin;
    const points = new Array();
    for (let row = 0; row < rows; row++) {
        points[row] = new Array();
        for (let column = 0; column < columns; column++) {
            const x = column * cellSize + margin + Math.random() * margins;
            const y = row * cellSize + margin + Math.random() * margins;
            points[row][column] = new Point2D(x, y);
        }
    }
    return points;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { makeRandomPointInEachCell };
