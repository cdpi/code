import { IPoint2D } from "zinal/geometry/point.js";
type Type = "M" | "C" | "Z";
interface ICommand {
    type: Type;
}
declare abstract class Command<T> implements ICommand {
    abstract type: Type;
    readonly value: T;
    constructor(value: T);
}
declare class MoveTo extends Command<IPoint2D> {
    readonly type: Type;
    constructor(point: IPoint2D);
    toString(): string;
}
declare class CurveTo extends Command<Array<IPoint2D>> {
    readonly type: Type;
    constructor(controlPointFrom: IPoint2D, controlPointTo: IPoint2D, to: IPoint2D);
    toString(): string;
}
declare class ClosePath extends Command<void> {
    readonly type: Type;
    toString(): string;
}
export { type Type, ICommand, Command, MoveTo, CurveTo, ClosePath };
