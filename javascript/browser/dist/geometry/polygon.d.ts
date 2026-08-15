import { IPoint2D } from "./point.js";
import { type RadiusModifier } from "./radius.js";
declare class Polygon {
    readonly n: number;
    constructor(n: number);
    getVertices(cx: number, cy: number, radius: number, modifier?: RadiusModifier | null): Array<IPoint2D>;
    getRandomVertices(cx: number, cy: number, radius: number, minimum: number, maximum: number): Array<IPoint2D>;
}
export { Polygon };
