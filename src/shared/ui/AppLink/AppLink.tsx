import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './appLink.module.scss'
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps{
    className?:string
    theme?:AppLinkTheme
}

const AppLink = (props:AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link to={to}
            className={ClassNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </Link>
    );
};

export default AppLink;