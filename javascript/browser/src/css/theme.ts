
import { getAll, getActiveStyleSheet, setActiveStyleSheet } from "./stylesheet.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

abstract class ThemeObserver
	{
	protected readonly darkMode:MediaQueryList;

	public constructor()
		{
		this.darkMode = window.matchMedia("(prefers-color-scheme: dark)");

		this.init();
		}

	protected abstract onSystemThemeChange(isDarkMode:boolean):void;

	private init():void
		{
		this.darkMode.addEventListener("change", (event:MediaQueryListEvent) => this.onSystemThemeChange(event.matches));
		}
	}

class ThemeManager extends ThemeObserver
	{
	public constructor()
		{
		super();
		}

	public get activeTheme():string|null
		{
		return getActiveStyleSheet();
		}

	public set activeTheme(theme:string)
		{
		setActiveStyleSheet(theme);
		}

	public get themes():Array<string>
		{
		return getAll();
		}

	protected onSystemThemeChange(isDarkMode:boolean):void
		{
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	ThemeObserver,
	ThemeManager
	};
