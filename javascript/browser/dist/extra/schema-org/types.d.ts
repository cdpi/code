import { Schema } from "./schema.js";
declare class TypeOrProperty {
    id: string;
    label: string;
    comment: string;
    supersedes: string | null;
    supersededBy: string | null;
    isPartOf: Schema | null;
}
declare class Type extends TypeOrProperty {
    subTypeOf: string | null;
}
declare class Property extends TypeOrProperty {
}
declare class Enumeration {
}
export { TypeOrProperty, Type, Property, Enumeration };
