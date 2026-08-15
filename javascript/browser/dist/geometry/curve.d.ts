import { IPoint2D } from "./point.js";
declare class Curve {
    static getControlPoints(before: IPoint2D, from: IPoint2D, to: IPoint2D, after: IPoint2D, tension: number): Array<IPoint2D>;
    static getControlPoints2(before: IPoint2D, from: IPoint2D, to: IPoint2D, after: IPoint2D, tension: number): Array<IPoint2D>;
}
export { Curve };
