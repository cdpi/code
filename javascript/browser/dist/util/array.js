import { getRandom } from "./random.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function chunk(array, size) {
    const result = new Array();
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
function sequence(count) {
    return Array.from({ length: count }, (value, key) => key);
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandom(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { chunk, sequence, shuffle };
