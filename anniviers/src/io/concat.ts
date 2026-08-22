
import { readTextFilesRecursively } from "./files-and-directories.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function concat(directory:string, separator:string = "\n\n"):string
	{
	let contents:Array<string> = [];

	readTextFilesRecursively(directory, true, (path:string, content:string) =>
		{
		contents.push(content);
		});

	return contents.join(separator);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	concat
	};
