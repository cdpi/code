
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Throttle: Limite l'exécution à une fois par intervalle de temps fixe.
 * 
 * @author Gemini
 */
function throttle<T extends (...args:any[]) => any>(fn:T, limit:number):(...args:Parameters<T>) => void
	{
	let inThrottle:boolean = false;

	return function(this:any, ...args:Parameters<T>): void
		{
		if (!inThrottle)
			{
			fn.apply(this, args);

			inThrottle = true;

			setTimeout(() => {inThrottle = false;}, limit);
			}
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	throttle
	};
