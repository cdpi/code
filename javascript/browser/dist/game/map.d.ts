import { IPoint2D } from "../geometry/point.js";
declare class Polygon {
    readonly n: number;
    constructor(n: number);
    getVertices(cx: number, cy: number, r: number): Array<IPoint2D>;
    getRandomVertices(cx: number, cy: number, rmin: number, rmax: number): Array<IPoint2D>;
    getSVG(cx: number, cy: number, r: number, fill?: string, stroke?: string): string;
    getRandomSVG(cx: number, cy: number, rmin: number, rmax: number, fill?: string, stroke?: string): string;
}
declare class Hexagon extends Polygon {
    constructor();
}
declare class Island {
    constructor();
}
export { Polygon, Hexagon, Island };
