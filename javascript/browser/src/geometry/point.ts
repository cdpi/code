
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IPoint2D
	{
	x:number;
	y:number;
	delta(to:IPoint2D):IPoint2D;
	tension(value:number):this;
	}

interface IPoint3D extends IPoint2D
	{
	z:number;
	}

class Point2D implements IPoint2D
	{
	public constructor(public x:number, public y:number)
		{
		}

	public delta(to:IPoint2D):IPoint2D
		{
		//return new Point(to.x - this.x, to.y - this.y);
		throw new Error("Method not implemented.");
		}

	public tension(value:number):this
		{
		//this.x *= value;
		//this.y *= value;
		//return this;
		throw new Error("Method not implemented.");
		}
	}

class Point3D extends Point2D implements IPoint3D
	{
	public constructor(x:number, y:number, public z:number)
		{
		super(x, y);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IPoint2D,
	IPoint3D,
	Point2D,
	Point3D
	};
