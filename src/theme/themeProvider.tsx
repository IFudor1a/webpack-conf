import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext";
import {useState} from "react";
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
const ThemeProvider = () => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const toggleThem = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }
    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>

            </ThemeContext.Provider>
    )
}