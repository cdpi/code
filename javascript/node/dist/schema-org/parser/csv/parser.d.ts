import { Property, Type } from "../../types.js";
declare class Parser {
    constructor();
    parse(filename: string): Array<any>;
    parseProperties(filename: string): Array<Property>;
    parseTypes(filename: string): Array<Type>;
    private parseProperty;
    private parseType;
    private parseSchema;
    private makeEnumerationMembers;
}
export { Parser };
