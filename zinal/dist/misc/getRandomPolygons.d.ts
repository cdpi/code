import { IPoint2D } from "../geometry/point.js";
declare function getRandomPoints(rows: number, columns: number, size: number, margin: number): Array<Array<IPoint2D>>;
declare function getRandomPolygons(rows: number, columns: number, size: number, margin: number): Array<Array<Array<IPoint2D>>>;
export { getRandomPoints, getRandomPolygons };
