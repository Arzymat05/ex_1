import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './navBar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";


const NavBar = () => {
    const {t} = useTranslation()
    return (
        <div className={ClassNames(cls.navBar, {}, [])}>
            <div className={cls.links}>

                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>{t("HomePage")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t("AboutPage")}</AppLink>
            </div>
        </div>
    );
};

export default NavBar;