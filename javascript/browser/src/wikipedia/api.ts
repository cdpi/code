
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getWikiText(page:string, section?:number):Promise<string>
	{
	const withSection:string = section ? `&section=${section}` : "";

	const url:string = `https://fr.wikipedia.org/w/api.php?action=parse&page=${page}&prop=wikitext${withSection}&format=json`;

	const response:Response = await fetch(url);

	const json:any = await response.json();

	const wikitext = json.parse.wikitext["*"];

	return wikitext;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getWikiText
	};
