//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PropertyHeader;
(function (PropertyHeader) {
    PropertyHeader["id"] = "id";
    PropertyHeader["label"] = "label";
    PropertyHeader["comment"] = "comment";
    PropertyHeader["subPropertyOf"] = "subPropertyOf";
    PropertyHeader["equivalentProperty"] = "equivalentProperty";
    PropertyHeader["subproperties"] = "subproperties";
    PropertyHeader["domainIncludes"] = "domainIncludes";
    PropertyHeader["rangeIncludes"] = "rangeIncludes";
    PropertyHeader["inverseOf"] = "inverseOf";
    PropertyHeader["supersedes"] = "supersedes";
    PropertyHeader["supersededBy"] = "supersededBy";
    PropertyHeader["isPartOf"] = "isPartOf";
})(PropertyHeader || (PropertyHeader = {}));
var TypeHeader;
(function (TypeHeader) {
    TypeHeader["id"] = "id";
    TypeHeader["label"] = "label";
    TypeHeader["comment"] = "comment";
    TypeHeader["subTypeOf"] = "subTypeOf";
    TypeHeader["enumerationtype"] = "enumerationtype";
    TypeHeader["equivalentClass"] = "equivalentClass";
    TypeHeader["properties"] = "properties";
    TypeHeader["subTypes"] = "subTypes";
    TypeHeader["supersedes"] = "supersedes";
    TypeHeader["supersededBy"] = "supersededBy";
    TypeHeader["isPartOf"] = "isPartOf";
})(TypeHeader || (TypeHeader = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { PropertyHeader, TypeHeader };
