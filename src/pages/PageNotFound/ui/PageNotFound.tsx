import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './PageNotFound.module.scss'
import PageLoaders from "../../../widgets/PageLoader/ui/PageLoaders";
import {useTranslation} from "react-i18next";

interface PageNotFoundProps{
    className?:string
}

export const PageNotFound = ({className}:PageNotFoundProps) => {
    const {t} = useTranslation();
    return (
        <div className={ClassNames(cls.pageNotFound, {}, [className])}>
            {t("Page not found")}
        </div>
    );
};

