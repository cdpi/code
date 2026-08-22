type Speaker = (message: string) => void;
declare const say: (piper: string, voice: string, rate: string | number) => Speaker;
export { type Speaker, say };
