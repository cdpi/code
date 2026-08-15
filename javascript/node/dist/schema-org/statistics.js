import { PropertyHeader, TypeHeader } from "./parser/csv/types.js";
import { Parser } from "./parser/csv/parser.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Statistics {
    column = "";
    count = 0;
    unique = new Set();
    empty = 0;
    comma = 0;
    get isUnique() {
        return this.unique.size === this.count;
    }
    get hasEmpty() {
        return this.empty > 0;
    }
    get hasComma() {
        return this.comma > 0;
    }
    get row() {
        return `<tr>
	<th>${this.column}</th>
	<td>${this.isUnique}</td>
	<td>${this.hasEmpty}</td>
	<td>${this.hasComma}</td>
</tr>
`;
    }
}
function getColumnStatistics(records, column) {
    const statistics = new Statistics();
    statistics.column = column;
    records.forEach(record => {
        const value = record[column];
        statistics.count++;
        statistics.unique.add(value);
        if (value === "") {
            statistics.empty++;
        }
        else {
            if (value.indexOf(",") >= 0) {
                statistics.comma++;
            }
        }
    });
    return statistics;
}
function getStatistics(filename, headers) {
    const records = (new Parser()).parse(filename);
    const map = new Map();
    headers.forEach(header => map.set(header, getColumnStatistics(records, header)));
    return map;
}
function getTypeStatistics(filename) {
    return getStatistics(filename, Object.getOwnPropertyNames(TypeHeader));
}
function getPropertyStatistics(filename) {
    return getStatistics(filename, Object.getOwnPropertyNames(PropertyHeader));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Statistics, getColumnStatistics, getStatistics, getTypeStatistics, getPropertyStatistics };
