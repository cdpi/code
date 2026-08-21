import { getAll, getActiveStyleSheet, setActiveStyleSheet } from "./stylesheet.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class ThemeObserver {
    darkMode;
    constructor() {
        this.darkMode = window.matchMedia("(prefers-color-scheme: dark)");
        this.init();
    }
    init() {
        this.darkMode.addEventListener("change", (event) => this.onSystemThemeChange(event.matches));
    }
}
class ThemeManager extends ThemeObserver {
    constructor() {
        super();
    }
    get activeTheme() {
        return getActiveStyleSheet();
    }
    set activeTheme(theme) {
        setActiveStyleSheet(theme);
    }
    get themes() {
        return getAll();
    }
    onSystemThemeChange(isDarkMode) {
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { ThemeObserver, ThemeManager };
