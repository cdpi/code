declare class Grid<T> {
    private cells;
    readonly rows: number;
    readonly columns: number;
    constructor(cells: T[], rows: number, columns: number);
    get(row: number, column: number): T;
    set(row: number, column: number, cell: T): void;
    rowIterator(index: number): Generator<T>;
    columnIterator(index: number): Generator<T>;
}
export { Grid };
