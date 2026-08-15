declare class EmptyStringError extends Error {
    constructor(message?: string);
}
declare class CircularReferenceError extends Error {
    constructor(message?: string);
}
declare class HTTPError extends Error {
    readonly code: number;
    constructor(code: number, message?: string);
}
declare class TimeoutError extends Error {
    constructor(message?: string);
}
export { EmptyStringError, CircularReferenceError, HTTPError, TimeoutError };
