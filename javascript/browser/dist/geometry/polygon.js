import { TWOPI } from "./constants.js";
import { Point2D } from "./point.js";
import { getRandomRadiusModifier } from "./radius.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Polygon {
    n;
    constructor(n) {
        this.n = n;
    }
    getVertices(cx, cy, radius, modifier = null) {
        const vertices = new Array();
        const step = TWOPI / this.n;
        for (let i = 0; i < this.n; i++) {
            const angle = i * step;
            let newRadius = radius;
            if (modifier) {
                newRadius = modifier(newRadius, angle, i);
            }
            const x = cx + Math.cos(angle) * newRadius;
            const y = cy + Math.sin(angle) * newRadius;
            vertices.push(new Point2D(x, y));
        }
        return vertices;
    }
    getRandomVertices(cx, cy, radius, minimum, maximum) {
        return this.getVertices(cx, cy, radius, getRandomRadiusModifier(minimum, maximum));
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Polygon };
