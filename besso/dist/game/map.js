import { getRandom } from "zinal/util/random.js";
import { Point2D } from "zinal/geometry/point.js";
import { TWOPI } from "zinal/geometry/constants.js";
import { pointsToString } from "../svg/util.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Polygon {
    n;
    constructor(n) {
        this.n = n;
    }
    getVertices(cx, cy, r) {
        const vertices = new Array();
        const pii = TWOPI / this.n;
        for (let i = 0; i < this.n; i++) {
            const theta = i * pii;
            const x = cx + r * Math.cos(theta);
            const y = cy + r * Math.sin(theta);
            vertices.push(new Point2D(x, y));
        }
        return vertices;
    }
    getRandomVertices(cx, cy, rmin, rmax) {
        const vertices = new Array();
        const pii = TWOPI / this.n;
        for (let i = 0; i < this.n; i++) {
            const theta = i * pii;
            const r = getRandom(rmin, rmax);
            const x = cx + r * Math.cos(theta);
            const y = cy + r * Math.sin(theta);
            vertices.push(new Point2D(x, y));
        }
        return vertices;
    }
    getSVG(cx, cy, r, fill = "none", stroke = "black") {
        const points = pointsToString(this.getVertices(cx, cy, r), " ", " ");
        return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
    }
    getRandomSVG(cx, cy, rmin, rmax, fill = "none", stroke = "black") {
        const points = pointsToString(this.getRandomVertices(cx, cy, rmin, rmax), " ", " ");
        return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
    }
}
class Hexagon extends Polygon {
    constructor() {
        super(6);
    }
}
class Island {
    constructor() {
    }
}
export { Polygon, Hexagon, Island };
