class TypeOrProperty {
    id = "";
    label = "";
    comment = "";
    supersedes = null;
    supersededBy = null;
    isPartOf = null;
}
class Type extends TypeOrProperty {
    subTypeOf = null;
}
class Property extends TypeOrProperty {
}
class Enumeration //extends TypeOrProperty
 {
}
export { TypeOrProperty, Type, Property, Enumeration };
