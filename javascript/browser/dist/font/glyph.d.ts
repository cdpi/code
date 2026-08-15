type Properties = {
    ascent: number;
    descent: number;
    em: number;
    family: string;
};
type Glyph = {
    src: string;
    width: number;
};
type Font = {
    props: Properties;
    input: string;
    output: Array<string>;
    glyphs: Record<string, Glyph>;
};
declare function alphabet(upperCase?: boolean): Array<string>;
declare function after(upperCase?: boolean): Array<Array<string>>;
declare function glyphToEntity(glyph: string): string;
declare function glyphToHTML(glyph: string): string;
declare function glyphs(url: string): Promise<string>;
export { type Properties, type Glyph, type Font, alphabet, after, glyphToEntity, glyphToHTML, glyphs };
