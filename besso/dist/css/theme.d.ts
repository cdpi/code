declare abstract class ThemeObserver {
    protected readonly darkMode: MediaQueryList;
    constructor();
    protected abstract onSystemThemeChange(isDarkMode: boolean): void;
    private init;
}
declare class ThemeManager extends ThemeObserver {
    constructor();
    get activeTheme(): string | null;
    set activeTheme(theme: string);
    get themes(): Array<string>;
    protected onSystemThemeChange(isDarkMode: boolean): void;
}
export { ThemeObserver, ThemeManager };
