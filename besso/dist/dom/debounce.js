//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Debounce: Attend une pause dans les appels avant d'exécuter la fonction.
 * @param immediate Si true, exécute la fonction au premier appel plutôt qu'au dernier.
 *
 * @author Gemini
 */
function debounce(fn, wait, immediate = false) {
    let timeout = null;
    return function (...args) {
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate) {
                fn.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow) {
            fn.apply(context, args);
        }
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { debounce };
