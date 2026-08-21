interface IPoint2D {
    x: number;
    y: number;
    delta(to: IPoint2D): IPoint2D;
    tension(value: number): this;
}
interface IPoint3D extends IPoint2D {
    z: number;
}
declare class Point2D implements IPoint2D {
    x: number;
    y: number;
    constructor(x: number, y: number);
    delta(to: IPoint2D): IPoint2D;
    tension(value: number): this;
}
declare class Point3D extends Point2D implements IPoint3D {
    z: number;
    constructor(x: number, y: number, z: number);
}
export { IPoint2D, IPoint3D, Point2D, Point3D };
