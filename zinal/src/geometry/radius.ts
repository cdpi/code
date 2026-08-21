
import { getRandom } from "../util/random.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type RadiusModifier = (radius:number, angle:number, index:number) => number;

function getRandomRadiusModifier(minimum:number, maximum:number):RadiusModifier
	{
	return (radius:number, angle:number, index:number) =>
		{
		return getRandom(minimum, maximum);
		};
	}

function getWaveRadiusModifier():RadiusModifier
	{
	return (radius:number, angle:number, index:number) =>
		{
		return radius + (Math.sin(angle * 4) * 10);
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type RadiusModifier,

	getRandomRadiusModifier,
	getWaveRadiusModifier
	};
