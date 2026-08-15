import { type Attributes } from "../../dom/attribute.js";
declare enum Source {
    SourceGraphic = 0,
    SourceAlpha = 1
}
type SourceName = Source | string;
type Input = SourceName;
type Output = SourceName;
declare function feFilter<T extends SVGElement>(filterName: string, attributes?: Attributes): T;
declare function filter(attributes?: Attributes): SVGFilterElement;
export { Source, type SourceName, type Input, type Output, feFilter, filter };
