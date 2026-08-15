type RadiusModifier = (radius: number, angle: number, index: number) => number;
declare function getRandomRadiusModifier(minimum: number, maximum: number): RadiusModifier;
declare function getWaveRadiusModifier(): RadiusModifier;
export { type RadiusModifier, getRandomRadiusModifier, getWaveRadiusModifier };
