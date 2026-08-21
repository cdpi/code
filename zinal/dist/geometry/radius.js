import { getRandom } from "../util/random.js";
function getRandomRadiusModifier(minimum, maximum) {
    return (radius, angle, index) => {
        return getRandom(minimum, maximum);
    };
}
function getWaveRadiusModifier() {
    return (radius, angle, index) => {
        return radius + (Math.sin(angle * 4) * 10);
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getRandomRadiusModifier, getWaveRadiusModifier };
