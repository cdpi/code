import { type StringOrNull } from "besso/util/string.js";
import { Schema } from "./schema.js";
declare class TypeOrProperty {
    id: string;
    label: string;
    comment: string;
    supersedes: StringOrNull;
    supersededBy: StringOrNull;
    isPartOf: Schema | null;
}
declare class Type extends TypeOrProperty {
    subTypeOf: StringOrNull;
}
declare class Property extends TypeOrProperty {
}
declare class Enumeration {
}
export { TypeOrProperty, Type, Property, Enumeration };
