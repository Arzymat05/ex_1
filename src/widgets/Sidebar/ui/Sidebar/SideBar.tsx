import React, {useState} from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import LanguageSwitcher from "shared/ui/LanguageSwitcher/ui/LanguageSwitcher";

interface SideBarProps{
    className?:string
}

const SideBar = ({className}:SideBarProps) => {
    const [collabsed, setCollabsed ] = useState(false)
    function toggleCollabsed(){
        setCollabsed(prev => !prev);
    }
    return (
        <div className={ClassNames(cls.sideBar,{[cls.collabsed]: collabsed}, [className])}>
            <button className={cls.btn} onClick={toggleCollabsed}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default SideBar;