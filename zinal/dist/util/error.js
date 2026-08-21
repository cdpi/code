//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotImplementedError";
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
class EmptyStringError extends Error {
    constructor(message) {
        super(message);
        this.name = "EmptyStringError";
        Object.setPrototypeOf(this, EmptyStringError.prototype);
    }
}
class CircularReferenceError extends Error {
    constructor(message) {
        super(message);
        this.name = "CircularReferenceError";
        Object.setPrototypeOf(this, CircularReferenceError.prototype);
    }
}
class HTTPError extends Error {
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = "HTTPError";
        Object.setPrototypeOf(this, HTTPError.prototype);
    }
}
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = "TimeoutError";
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { NotImplementedError, EmptyStringError, CircularReferenceError, HTTPError, TimeoutError };
