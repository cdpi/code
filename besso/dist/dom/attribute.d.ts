type AttributeValue = string | number;
type Attributes = {
    [key: string]: AttributeValue;
};
declare function setAttributes<T extends Element>(element: T, attributes?: Attributes): T;
export { type AttributeValue, type Attributes, setAttributes };
