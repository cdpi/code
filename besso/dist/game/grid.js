//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Grid {
    cells;
    rows;
    columns;
    constructor(cells, rows, columns) {
        if (cells.length !== rows * columns) {
            throw new Error("Cells length does not match rows * columns");
        }
        this.cells = cells;
        this.rows = rows;
        this.columns = columns;
    }
    get(row, column) {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
            throw new Error("Index out of bounds");
        }
        return this.cells[row * this.columns + column];
    }
    set(row, column, cell) {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
            throw new Error("Index out of bounds");
        }
        this.cells[row * this.columns + column] = cell;
    }
    *rowIterator(index) {
        if (index < 0 || index >= this.rows) {
            return;
        }
        const start = index * this.columns;
        for (let column = 0; column < this.columns; column++) {
            yield this.cells[start + column];
        }
    }
    *columnIterator(index) {
        if (index < 0 || index >= this.columns) {
            return;
        }
        for (let row = 0; row < this.rows; row++) {
            yield this.cells[row * this.columns + index];
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Grid };
