/**
 * Debounce: Attend une pause dans les appels avant d'exécuter la fonction.
 * @param immediate Si true, exécute la fonction au premier appel plutôt qu'au dernier.
 *
 * @author Gemini
 */
declare function debounce<T extends (...args: any[]) => any>(fn: T, wait: number, immediate?: boolean): (...args: Parameters<T>) => void;
export { debounce };
