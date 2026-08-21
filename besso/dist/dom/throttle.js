//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Throttle: Limite l'exécution à une fois par intervalle de temps fixe.
 *
 * @author Gemini
 */
function throttle(fn, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => { inThrottle = false; }, limit);
        }
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { throttle };
