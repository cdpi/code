
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AttributeValue = string | number;

type Attributes = {[key:string]:AttributeValue};

function setAttributes<T extends Element>(element:T, attributes?:Attributes):T
	{
	if (attributes)
		{
		for (const [attribute, value] of Object.entries(attributes))
			{
			element.setAttribute(attribute, String(value));
			}
		}

	return element;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	type AttributeValue,
	type Attributes,

	setAttributes
	};
