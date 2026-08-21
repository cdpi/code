
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Grid<T>
	{
	private cells:T[];
	public readonly rows:number;
	public readonly columns:number;

	public constructor(cells: T[], rows:number, columns:number)
		{
		if (cells.length !== rows * columns)
			{
			throw new Error("Cells length does not match rows * columns");
			}

		this.cells = cells;
		this.rows = rows;
		this.columns = columns;
		}

	public get(row:number, column:number):T
		{
		if (row < 0 || row >= this.rows || column < 0 || column >= this.columns)
			{
			throw new Error("Index out of bounds");
			}

		return this.cells[row * this.columns + column];
		}

	public set(row:number, column:number, cell:T):void
		{
		if (row < 0 || row >= this.rows || column < 0 || column >= this.columns)
			{
			throw new Error("Index out of bounds");
			}

		this.cells[row * this.columns + column] = cell;
		}

	public *rowIterator(index:number):Generator<T>
		{
		if (index < 0 || index >= this.rows)
			{
			return;
			}

		const start = index * this.columns;

		for (let column = 0; column < this.columns; column++)
			{
			yield this.cells[start + column];
			}
		}

	public *columnIterator(index:number):Generator<T>
		{
		if (index < 0 || index >= this.columns)
			{
			return;
			}

		for (let row = 0; row < this.rows; row++)
			{
			yield this.cells[row * this.columns + index];
			}
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Grid
	};
