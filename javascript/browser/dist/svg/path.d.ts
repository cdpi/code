import { IPoint2D } from "../geometry/point.js";
import { ICommand } from "./command.js";
declare class Path {
    protected readonly commands: Array<ICommand>;
    constructor();
    moveTo(point: IPoint2D): this;
    curveTo(points: Array<IPoint2D>): this;
    closePath(): this;
    toString(): string;
    static getCurvedPathFromPoints(points: Array<IPoint2D>, tension?: number): Path;
}
export { Path };
