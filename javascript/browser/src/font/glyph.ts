
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Font =
	{
	glyphs:Record<string, any>;
	};

function glyphToEntity(glyph:string):string
	{
	return `&#${parseInt(glyph, 16)};`;
	}

function glyphToHTML(glyph:string):string
	{
	return `<div class="glyph"><span>${glyphToEntity(glyph)}</span></div>`;
	}

async function glyphs(url:string):Promise<string>
	{
	const response = await fetch(url);

	const font = await response.json() as Font;

	const html = Object.getOwnPropertyNames(font.glyphs).map(glyphToHTML).join("\n");

	//document.getElementById("glyphs")!.innerHTML = html;
	return html;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type Font,

	glyphToEntity
	};
