import { exec } from "node:child_process";
const say = (piper, voice, rate) => {
    const piperCli = `${piper} --model "${voice}" --output_raw 2>/dev/null`;
    const aplayCli = `aplay -r ${rate} -f S16_LE -t raw -c 1 -q`;
    return (message) => {
        exec(`echo "${message}" | ${piperCli} | ${aplayCli}`);
    };
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { say };
