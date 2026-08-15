declare function getCodePoints(text: string): Array<number>;
declare const TEXT_VARIATION_SELECTOR = 65038;
declare const EMOJI_VARIATION_SELECTOR = 65039;
declare const notTextVariationSelector: (codePoint: number) => boolean;
declare const notEmojiVariationSelector: (codePoint: number) => boolean;
export { TEXT_VARIATION_SELECTOR, EMOJI_VARIATION_SELECTOR, getCodePoints, notTextVariationSelector, notEmojiVariationSelector };
