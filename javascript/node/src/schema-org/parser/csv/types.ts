
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

enum PropertyHeader
	{
	id = "id",
	label = "label",
	comment = "comment",
	subPropertyOf = "subPropertyOf",
	equivalentProperty = "equivalentProperty",
	subproperties = "subproperties",
	domainIncludes = "domainIncludes",
	rangeIncludes = "rangeIncludes",
	inverseOf = "inverseOf",
	supersedes = "supersedes",
	supersededBy = "supersededBy",
	isPartOf = "isPartOf"
	}

enum TypeHeader
	{
	id = "id",
	label = "label",
	comment = "comment",
	subTypeOf = "subTypeOf",
	enumerationtype = "enumerationtype",
	equivalentClass = "equivalentClass",
	properties = "properties",
	subTypes = "subTypes",
	supersedes = "supersedes",
	supersededBy = "supersededBy",
	isPartOf = "isPartOf"
	}

interface Property extends Record<keyof typeof PropertyHeader, string>
	{
	}

interface Type extends Record<keyof typeof TypeHeader, string>
	{
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	PropertyHeader,
	TypeHeader,
	Property,
	Type
	};
