
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ALL:string = "link[rel~='stylesheet'][title]";

const ACTIVE:string = "link[rel~='stylesheet']:not(disabled)[title]";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getAll():Array<string>
	{
	const all:Array<string> = new Array<string>();

	document.querySelectorAll<HTMLLinkElement>(ALL).forEach((link:HTMLLinkElement) =>
		{
		all.push(link.title);
		});

	return all;
	}

function getActiveStyleSheet():string|null
	{
	const link:HTMLLinkElement|null = document.querySelector<HTMLLinkElement>(ACTIVE);

	return link ? link.title : null;
	}

function setActiveStyleSheet(title:string):void
	{
	document.querySelectorAll<HTMLLinkElement>(ALL)
		.forEach((link:HTMLLinkElement) => link.disabled = link.title !== title);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getAll,
	getActiveStyleSheet,
	setActiveStyleSheet
	};
