
import { readFileSync } from "node:fs";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FILENAME_APPFILTER = "appfilter.xml";
const FILENAME_DRAWABLE = "drawable.xml";

const toDrawableName = (text:string):string => `ic_${text.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;

type ParseCallback = (name:string, pkg:string, activity:string, drawableName:string) => void;

function parse(path:string, callback:ParseCallback):void
	{
	const csv = readFileSync(path, "utf-8");
	const lines = csv.trim().split("\n").sort();

	lines.forEach(line =>
		{
		const [name, pkg, activity] = line.split(",").map(s => s?.trim());

		if (name && pkg && activity)
			{
			callback(name, pkg, activity, toDrawableName(name));
			}
		});
	}

function csvToAppFilter(path:string):string
	{
	const xml:Array<string> = new Array<string>();

	xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
	xml.push(`<resources>`);

	parse(path, (name:string, pkg:string, activity:string, drawableName:string) =>
		{
		xml.push(`\t<item component="ComponentInfo{${pkg}/${activity}}" drawable="${drawableName}" />`);
		});

	xml.push(`</resources>`);

	return xml.join("\n");
	}

function csvToDrawable(path:string):string
	{
	const xml:Array<string> = new Array<string>();

	xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
	xml.push(`<resources>`);

	parse(path, (name:string, pkg:string, activity:string, drawableName:string) =>
		{
		xml.push(`\t<item drawable="${drawableName}" />`);
		});

	xml.push(`</resources>`);

	return xml.join("\n");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	FILENAME_APPFILTER,
	FILENAME_DRAWABLE,

	type ParseCallback,

	parse,
	csvToAppFilter,
	csvToDrawable
	};
