import { Curve } from "../geometry/curve.js";
import { MoveTo, CurveTo, ClosePath } from "./command.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Path {
    commands;
    constructor() {
        this.commands = new Array();
    }
    moveTo(point) {
        this.commands.push(new MoveTo(point));
        return this;
    }
    curveTo(points) {
        this.commands.push(new CurveTo(points[0], points[1], points[2]));
        return this;
    }
    closePath() {
        this.commands.push(new ClosePath());
        return this;
    }
    toString() {
        return this.commands.map(command => command.toString()).join(" ");
    }
    static getCurvedPathFromPoints(points, tension = 0.2) {
        const path = new Path();
        const n = points.length;
        path.moveTo(points[0]);
        for (let i = 0; i < n; i++) {
            const point1 = points[(i - 1 + n) % n];
            const point2 = points[i];
            const point3 = points[(i + 1) % n];
            const point4 = points[(i + 2) % n];
            const controlPoints = Curve.getControlPoints(point1, point2, point3, point4, tension);
            //commands.push(new CurveTo(controlPoints[0], controlPoints[1], point3));
            path.curveTo([controlPoints[0], controlPoints[1], point3]);
        }
        path.closePath();
        return path;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function polygonToPath(points:Array<IPoint>, tension:number = 0.2):string
    {
    return Path.curved(points, tension).map(command => command.toString()).join(" ");
    }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Path };
