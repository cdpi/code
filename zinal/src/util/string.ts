
import { EmptyStringError } from "./error.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type StringOrNull = string | null;

function stringOrNull(text:string):StringOrNull
	{
	return (text.length > 0) ? text : null;
	}

function stringNotEmpty(text:string):string
	{
	if (text.length === 0)
		{
		throw new EmptyStringError();
		}

	return text;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function slugify(str: string): string {
  const removedAccents = removeAccents(str);
  return removedAccents
	.toLowerCase()
	.trim()
	.replace(/[^a-z0-9]+/g, "-")
	.replace(/^-+|-+$/g, "");
}
*/

function removeAccents(text:string):string
	{
	return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	}

function toHex(value:number, upperCase:boolean = false, padLength:number = 0):string
	{
	let hex:string = value.toString(16);

	if (upperCase)
		{
		hex = hex.toUpperCase();
		}

	if (padLength > 0)
		{
		hex = hex.padStart(padLength, "0");
		}

	return hex;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type StringOrNull,

	stringOrNull,
	stringNotEmpty,
	removeAccents,
	toHex
	};
