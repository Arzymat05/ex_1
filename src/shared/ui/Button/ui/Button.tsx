import React, {ButtonHTMLAttributes, FC} from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string,
    theme?:ThemeButton
}

const Button :FC<ButtonProps>= (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;
    return (
        <button className={ClassNames(cls.Button, {}, [className, cls[theme]])}  {...otherProps}>
            {children}
        </button>
    );
};

export default Button;