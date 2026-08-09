
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Debounce: Attend une pause dans les appels avant d'exécuter la fonction.
 * @param immediate Si true, exécute la fonction au premier appel plutôt qu'au dernier.
 * 
 * @author Gemini
 */
function debounce<T extends (...args:any[]) => any>(fn:T, wait:number, immediate:boolean = false):(...args:Parameters<T>) => void
	{
	let timeout:ReturnType<typeof setTimeout> | null = null;

	return function(this:any, ...args:Parameters<T>):void
		{
		const context = this;

		const later = () =>
			{
			timeout = null;

			if (!immediate)
				{
				fn.apply(context, args);
				}
			};

		const callNow = immediate && !timeout;

		if (timeout !== null)
			{
			clearTimeout(timeout);
			}

		timeout = setTimeout(later, wait);

		if (callNow)
			{
			fn.apply(context, args);
			}
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	debounce
	};
