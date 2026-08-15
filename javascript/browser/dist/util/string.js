import { EmptyStringError } from "./error.js";
function stringOrNull(text) {
    return (text.length > 0) ? text : null;
}
function stringNotEmpty(text) {
    if (text.length === 0) {
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
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function toHex(value, upperCase = false, padLength = 0) {
    let hex = value.toString(16);
    if (upperCase) {
        hex = hex.toUpperCase();
    }
    if (padLength > 0) {
        hex = hex.padStart(padLength, "0");
    }
    return hex;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { stringOrNull, stringNotEmpty, removeAccents, toHex };
