
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class EmptyStringError extends Error
	{
	public constructor(message?:string)
		{
		super(message);

		this.name = "EmptyStringError";

		Object.setPrototypeOf(this, EmptyStringError.prototype);
		}
	}

class CircularReferenceError extends Error
	{
	public constructor(message?:string)
		{
		super(message);

		this.name = "CircularReferenceError";

		Object.setPrototypeOf(this, CircularReferenceError.prototype);
		}
	}

class HTTPError extends Error
	{
	public constructor(public readonly code:number, message?:string)
		{
		super(message);

		this.name = "HTTPError";

		Object.setPrototypeOf(this, HTTPError.prototype);
		}
	}

class TimeoutError extends Error
	{
	public constructor(message?:string)
		{
		super(message);

		this.name = "TimeoutError";

		Object.setPrototypeOf(this, TimeoutError.prototype);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	EmptyStringError,
	CircularReferenceError,
	HTTPError,
	TimeoutError
	};
