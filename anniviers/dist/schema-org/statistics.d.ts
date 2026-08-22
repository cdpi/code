declare class Statistics {
    column: string;
    count: number;
    unique: Set<string>;
    empty: number;
    comma: number;
    get isUnique(): boolean;
    get hasEmpty(): boolean;
    get hasComma(): boolean;
    get row(): string;
}
declare function getColumnStatistics(records: Array<any>, column: string): Statistics;
declare function getStatistics(filename: string, headers: Array<string>): Map<string, Statistics>;
declare function getTypeStatistics(filename: string): Map<string, Statistics>;
declare function getPropertyStatistics(filename: string): Map<string, Statistics>;
export { Statistics, getColumnStatistics, getStatistics, getTypeStatistics, getPropertyStatistics };
