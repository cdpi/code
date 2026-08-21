declare function chunk<T>(array: Array<T>, size: number): Array<Array<T>>;
declare function sequence(count: number): Array<number>;
declare function shuffle<T>(array: Array<T>): Array<T>;
export { chunk, sequence, shuffle };
