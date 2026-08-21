//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function getWikiText(page, section) {
    const withSection = section ? `&section=${section}` : "";
    const url = `https://fr.wikipedia.org/w/api.php?action=parse&page=${page}&prop=wikitext${withSection}&format=json`;
    const response = await fetch(url);
    const json = await response.json();
    const wikitext = json.parse.wikitext["*"];
    return wikitext;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { getWikiText };
