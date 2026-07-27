import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './PageLoaders.module.scss'

interface PageLoadersProps{
    className?:string
}

const PageLoaders = ({className}:PageLoadersProps) => {
    return (
        <div className={ClassNames(cls.pageLoaders, {}, [className])}>
            <span className={cls.loader}></span>
        </div>
    );
};

export default PageLoaders;