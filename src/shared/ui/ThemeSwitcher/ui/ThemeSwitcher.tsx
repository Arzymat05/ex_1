import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import {useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/asets/icons/theme-light.svg'
import DarkIcon from 'shared/asets/icons/theme-dark.svg'
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import Button, {ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps{
    className?:string
}

const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {

    const {theme, togleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={togleTheme} className={ClassNames("", {}, [className])}>
            {theme === Theme.DARK? <DarkIcon /> : <LightIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;