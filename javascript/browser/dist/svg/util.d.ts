import { IPoint2D } from "../geometry/point.js";
import { type Attributes } from "../dom/attribute.js";
declare function svgElement<T extends SVGElement>(tagName: string, attributes?: Attributes): T;
declare function pointToString(point: IPoint2D, separator: string): string;
declare function pointsToString(points: Array<IPoint2D>, pointSeparator: string, pointsSeparator: string): string;
export { svgElement, pointToString, pointsToString };
