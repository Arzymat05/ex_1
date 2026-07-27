import React from 'react';
import {useTranslation} from "react-i18next";

const AboutUsPage = () => {
    const {t} = useTranslation("about")
    return (
        <div>
            {t("AboutPage")}
        </div>
    );
};

export default AboutUsPage;