import React from 'react';
import Button, {ThemeButton} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps{
    className?:string
}

const LanguageSwitcher = ({className}:LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation();

    function toggleLanguage(){
        i18n.changeLanguage(i18n.language == "en" ?"ru" : "en");
    }

    return (
        <Button onClick={toggleLanguage} theme={ThemeButton.CLEAR} className={ClassNames(cls.languageSwitcher, {} ,[className])}>
            {t("Translate")}
        </Button>
    );
};

export default LanguageSwitcher;