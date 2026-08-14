
import { type StringOrNull } from "besso/util/string.js";
import { Schema } from "./schema.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class TypeOrProperty
	{
	public id:string = "";
	public label:string = "";
	public comment:string = "";
	public supersedes:StringOrNull = null;
	public supersededBy:StringOrNull = null;
	public isPartOf:Schema|null = null;
	}

class Type extends TypeOrProperty
	{
	public subTypeOf:StringOrNull = null;
	}

class Property extends TypeOrProperty
	{
	}

class Enumeration //extends TypeOrProperty
	{
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	TypeOrProperty,
	Type,
	Property,
	Enumeration
	};
