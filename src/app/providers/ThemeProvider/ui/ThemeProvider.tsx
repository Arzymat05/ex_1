import React, { ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext , Theme} from "../lib/ThemeContext";


export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({children}:ThemeProviderProps) => {
    const newTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY )as Theme || Theme.LIGHT;

    const [theme , setTheme] = useState<Theme>(newTheme);

    const defaultTheme =useMemo(() =>{
        return{theme , setTheme}
    } , [theme]) ;

    return (
        <ThemeContext.Provider value={defaultTheme} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;