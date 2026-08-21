/**
 * Throttle: Limite l'exécution à une fois par intervalle de temps fixe.
 *
 * @author Gemini
 */
declare function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void;
export { throttle };
