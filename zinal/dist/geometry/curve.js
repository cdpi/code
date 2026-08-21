import { Point2D } from "./point.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Curve {
    static getControlPoints(before, from, to, after, tension) {
        const x1 = from.x + (to.x - before.x) * tension;
        const y1 = from.y + (to.y - before.y) * tension;
        const x2 = to.x - (after.x - from.x) * tension;
        const y2 = to.y - (after.y - from.y) * tension;
        return new Array(new Point2D(x1, y1), new Point2D(x2, y2));
    }
    static getControlPoints2(before, from, to, after, tension) {
        const d1 = before.delta(to).tension(tension);
        const d2 = from.delta(after).tension(tension);
        const cp1 = new Point2D(from.x + d1.x, from.y + d1.y);
        const cp2 = new Point2D(to.x - d2.x, to.y - d2.y);
        return new Array(cp1, cp2);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Curve };
