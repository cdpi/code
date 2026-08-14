
import { readFileSync } from "node:fs";
import { parse as parseSync } from "csv-parse/sync";

//import { stringNotEmpty, stringOrNull, splitByComma } from "./util.js";
import { stringNotEmpty, stringOrNull } from "besso/util/string.js";

import { Schema } from "../../schema.js";
import { Property, Type } from "../../types.js";
import { Property as CSVProperty, Type as CSVType } from "./types.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function splitByComma(text:string):Array<string>
	{
	return stringNotEmpty(text).split(",").map(text => text.trim()).filter(text => text.length > 0);
	}

export
	{
	splitByComma
	};
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Parser
	{
	public constructor()
		{
		}

	public parse(filename:string):Array<any>
		{
		return parseSync(readFileSync(filename, "utf8"), {columns: true}) as Array<any>;
		}

	public parseProperties(filename:string):Array<Property>
		{
		return this.parse(filename).map(this.parseProperty) as Array<Property>;
		}

	public parseTypes(filename:string):Array<Type>
		{
		return this.parse(filename).map(this.parseType) as Array<Type>;
		}

	private parseProperty(row:CSVProperty):Property
		{
		const property:Property =
			{
			id: stringNotEmpty(row.id),
			label: stringNotEmpty(row.label),
			comment: stringNotEmpty(row.comment),
			supersedes: stringOrNull(row.supersedes),
			supersededBy: stringOrNull(row.supersededBy),
			isPartOf: this.parseSchema(row.isPartOf)
			};

		return property;
		}

	private parseType(row:CSVType):Type
		{
		const type:Type =
			{
			id: stringNotEmpty(row.id),
			label: stringNotEmpty(row.label),
			comment: stringNotEmpty(row.comment),
			subTypeOf: stringOrNull(row.subTypeOf),
			supersedes: stringOrNull(row.supersedes),
			supersededBy: stringOrNull(row.supersededBy),
			isPartOf: this.parseSchema(row.isPartOf)
			};

		return type;
		}

	private parseSchema(text:string):Schema
		{
		switch (text)
			{
			case "":
				return Schema.CORE;
			case "https://auto.schema.org":
				return Schema.AUTO;
			case "https://attic.schema.org":
				return Schema.ATTIC;
			case "https://bib.schema.org":
				return Schema.BIB;
			case "https://meta.schema.org":
				return Schema.META;
			case "https://pending.schema.org":
				return Schema.PENDING;
			default:
				throw new Error(`Unknown schema: ${text}`);
			}
		}

	private makeEnumerationMembers():void
		{
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Parser
	};
