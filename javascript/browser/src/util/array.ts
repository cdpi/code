
import { getRandom } from "./random.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chunk<T>(array:Array<T>, size:number):Array<Array<T>>
	{
	const result:Array<Array<T>> = new Array<Array<T>>();

	for (let i = 0; i < array.length; i += size)
		{
		result.push(array.slice(i, i + size));
		}

	return result;
	}

function shuffle<T>(array:Array<T>):Array<T>
	{
	for (let i = array.length - 1; i > 0; i--)
		{
		const j = getRandom(0, i);

		[array[i], array[j]] = [array[j], array[i]];
		}

	return array;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	chunk,
	shuffle
	};
