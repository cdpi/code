import { readFileSync } from "node:fs";
import { parse as parseSync } from "csv-parse/sync";
//import { stringNotEmpty, stringOrNull, splitByComma } from "./util.js";
import { stringNotEmpty, stringOrNull } from "zinal/util/string.js";
import { Schema } from "../../schema.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function splitByComma(text:string):Array<string>
    {
    return stringNotEmpty(text).split(",").map(text => text.trim()).filter(text => text.length > 0);
    }

export
    {
    splitByComma
    };
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Parser {
    constructor() {
    }
    parse(filename) {
        return parseSync(readFileSync(filename, "utf8"), { columns: true });
    }
    parseProperties(filename) {
        return this.parse(filename).map(this.parseProperty);
    }
    parseTypes(filename) {
        return this.parse(filename).map(this.parseType);
    }
    parseProperty(row) {
        const property = {
            id: stringNotEmpty(row.id),
            label: stringNotEmpty(row.label),
            comment: stringNotEmpty(row.comment),
            supersedes: stringOrNull(row.supersedes),
            supersededBy: stringOrNull(row.supersededBy),
            isPartOf: this.parseSchema(row.isPartOf)
        };
        return property;
    }
    parseType(row) {
        const type = {
            id: stringNotEmpty(row.id),
            label: stringNotEmpty(row.label),
            comment: stringNotEmpty(row.comment),
            subTypeOf: stringOrNull(row.subTypeOf),
            supersedes: stringOrNull(row.supersedes),
            supersededBy: stringOrNull(row.supersededBy),
            isPartOf: this.parseSchema(row.isPartOf)
        };
        return type;
    }
    parseSchema(text) {
        switch (text) {
            case "":
                return Schema.CORE;
            case "https://auto.schema.org":
                return Schema.AUTO;
            case "https://attic.schema.org":
                return Schema.ATTIC;
            case "https://bib.schema.org":
                return Schema.BIB;
            case "https://meta.schema.org":
                return Schema.META;
            case "https://pending.schema.org":
                return Schema.PENDING;
            default:
                throw new Error(`Unknown schema: ${text}`);
        }
    }
    makeEnumerationMembers() {
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Parser };
