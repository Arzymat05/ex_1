import React from 'react';
import {ClassNames} from "shared/lib/classNames/ClassNames";
import cls from './ErrorMessage.module.scss'
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/ui/Button";

interface ErrorMessageProps{
    className?:string
}


const ErrorMessage = ({className}:ErrorMessageProps) => {
    const {t} = useTranslation();
    function reloadSite(){
        location.reload();
    }

    return (
        <div className={ClassNames(cls.errorMessage, {}, [className])}>
            {t("error")}
            <Button onClick={reloadSite}> {t("reload")}</Button>
        </div>
    );
};

export default ErrorMessage;