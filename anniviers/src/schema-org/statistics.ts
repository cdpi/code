
import { PropertyHeader, TypeHeader } from "./parser/csv/types.js";
import { Parser } from "./parser/csv/parser.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Statistics
	{
	public column:string = "";
	public count:number = 0;
	public unique:Set<string> = new Set();
	public empty:number = 0;
	public comma:number = 0;

	public get isUnique():boolean
		{
		return this.unique.size === this.count;
		}

	public get hasEmpty():boolean
		{
		return this.empty > 0;
		}

	public get hasComma():boolean
		{
		return this.comma > 0;
		}

	public get row():string
		{
		return `<tr>
	<th>${this.column}</th>
	<td>${this.isUnique}</td>
	<td>${this.hasEmpty}</td>
	<td>${this.hasComma}</td>
</tr>
`;
		}
	}

function getColumnStatistics(records:Array<any>, column:string):Statistics
	{
	const statistics:Statistics = new Statistics();

	statistics.column = column;

	records.forEach(record =>
		{
		const value = record[column] as string;

		statistics.count++;

		statistics.unique.add(value);

		if (value === "")
			{
			statistics.empty++;
			}
		else
			{
			if (value.indexOf(",") >= 0)
				{
				statistics.comma++;
				}
			}
		});

	return statistics;
	}

function getStatistics(filename:string, headers:Array<string>):Map<string, Statistics>
	{
	const records = (new Parser()).parse(filename);

	const map:Map<string, Statistics> = new Map();

	headers.forEach(header => map.set(header, getColumnStatistics(records, header)));

	return map;
	}

function getTypeStatistics(filename:string):Map<string, Statistics>
	{
	return getStatistics(filename, Object.getOwnPropertyNames(TypeHeader));
	}

function getPropertyStatistics(filename:string):Map<string, Statistics>
	{
	return getStatistics(filename, Object.getOwnPropertyNames(PropertyHeader));
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Statistics,

	getColumnStatistics,
	getStatistics,
	getTypeStatistics,
	getPropertyStatistics
	};
