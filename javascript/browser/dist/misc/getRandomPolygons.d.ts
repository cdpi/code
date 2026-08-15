import { IPoint2D } from "../geometry/point.js";
declare const getRandomPoints: (rows: number, columns: number, size: number, margin: number) => Array<Array<IPoint2D>>;
declare const getRandomPolygons: (rows: number, columns: number, size: number, margin: number) => Array<Array<Array<IPoint2D>>>;
export { getRandomPoints, getRandomPolygons };
