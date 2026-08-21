type StringOrNull = string | null;
declare function stringOrNull(text: string): StringOrNull;
declare function stringNotEmpty(text: string): string;
declare function removeAccents(text: string): string;
declare function toHex(value: number, upperCase?: boolean, padLength?: number): string;
export { type StringOrNull, stringOrNull, stringNotEmpty, removeAccents, toHex };
