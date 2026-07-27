import React, {useState} from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import LanguageSwitcher from "shared/ui/LanguageSwitcher/ui/LanguageSwitcher";
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/ui/Button";

interface SideBarProps{
    className?:string
}

const SideBar = ({className}:SideBarProps) => {
    const [collabsed, setCollabsed ] = useState<boolean>(false)
    const {t} = useTranslation()
    function toggleCollabsed() {
        setCollabsed(prev => !prev);
    }

    return (
        <div className={ClassNames(cls.sideBar,{[cls.collabsed]: collabsed}, [className])}>
            <Button  onClick={toggleCollabsed}>{t("Toggle")}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default SideBar;