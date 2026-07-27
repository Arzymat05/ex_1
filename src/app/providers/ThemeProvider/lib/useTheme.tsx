import  {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

export interface useThemeResult {
    theme: Theme;
    togleTheme: () => void;
}

const UseTheme = ():useThemeResult => {

    const {theme, setTheme} = useContext(ThemeContext)

    const togleTheme =() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT: Theme.DARK;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

        setTheme(newTheme);
    }
    return {
        theme,
        togleTheme,
    }
};

export default UseTheme;