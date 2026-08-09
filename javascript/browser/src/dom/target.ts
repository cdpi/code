
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getEventTargetElement(event:Event):HTMLElement | SVGElement | null
	{
	if (event.target)
		{
		if (event.target instanceof HTMLElement)
			{
			return event.target as HTMLElement;
			}

		if (event.target instanceof SVGElement)
			{
			return event.target as SVGElement;
			}
		}

	return null;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getEventTargetElement
	};
