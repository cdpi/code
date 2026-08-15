import { pointToString, pointsToString } from "./util.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const point = (point) => pointToString(point, " ");
const points = (points) => pointsToString(points, " ", ",");
class Command {
    value;
    constructor(value) {
        this.value = value;
    }
}
class MoveTo extends Command {
    type = "M";
    constructor(point) {
        super(point);
    }
    toString() {
        return `${this.type} ${point(this.value)}`;
    }
}
class CurveTo extends Command {
    type = "C";
    constructor(controlPointFrom, controlPointTo, to) {
        super(new Array(controlPointFrom, controlPointTo, to));
    }
    toString() {
        return `${this.type} ${points(this.value)}`;
    }
}
class ClosePath extends Command {
    type = "Z";
    toString() {
        return this.type;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Command, MoveTo, CurveTo, ClosePath };
