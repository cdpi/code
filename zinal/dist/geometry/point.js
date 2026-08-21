import { NotImplementedError } from "../util/error.js";
class Point2D {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    delta(to) {
        //return new Point(to.x - this.x, to.y - this.y);
        //throw new Error("Method not implemented.");
        throw new NotImplementedError();
    }
    tension(value) {
        //this.x *= value;
        //this.y *= value;
        //return this;
        //throw new Error("Method not implemented.");
        throw new NotImplementedError();
    }
}
class Point3D extends Point2D {
    z;
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Point2D, Point3D };
