
import { exec } from "node:child_process";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Speaker = (message:string) => void;

const say = (piper:string, voice:string, rate:string|number):Speaker =>
	{
	const piperCli = `${piper} --model "${voice}" --output_raw 2>/dev/null`;

	const aplayCli = `aplay -r ${rate} -f S16_LE -t raw -c 1 -q`;

	return (message:string):void =>
		{
		exec(`echo "${message}" | ${piperCli} | ${aplayCli}`);
		};
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type Speaker,

	say
	};
