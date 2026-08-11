
import { Schema } from "./schema.js";

class TypeOrProperty
	{
	public id:string = "";
	public label:string = "";
	public comment:string = "";
	public supersedes:string|null = null;
	public supersededBy:string|null = null;
	public isPartOf:Schema|null = null;
	}

class Type extends TypeOrProperty
	{
	public subTypeOf:string|null = null;
	}

class Property extends TypeOrProperty
	{
	}

class Enumeration //extends TypeOrProperty
	{
	}

export
	{
	TypeOrProperty,
	Type,
	Property,
	Enumeration
	};
