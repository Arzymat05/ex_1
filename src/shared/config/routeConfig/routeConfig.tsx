import {RouteProps} from "react-router-dom";
import { HomePage } from "pages/HomePage";
import {AboutPage} from "pages/AboutUs";
import {PageNotFound} from "pages/PageNotFound";


export enum AppRoute {
    MAINPAGE = "main",
    ABOUTUS = "about",
    PAGE_NOT_FOUND = "not-found",
}

export const AppRouteConfig:Record<AppRoute, string> ={
    [AppRoute.MAINPAGE]:'/',
    [AppRoute.ABOUTUS]:'/about',
    [AppRoute.PAGE_NOT_FOUND]:'*',
}

export const routeConfig:Record<AppRoute, RouteProps> = {
    [AppRoute.MAINPAGE]:{
        path:AppRouteConfig.main,
        element:<HomePage/>,
    },
    [AppRoute.ABOUTUS]:{
        path:AppRouteConfig.about,
        element:<AboutPage/>,
    },
    [AppRoute.PAGE_NOT_FOUND]:{
        path:AppRouteConfig["not-found"],
        element:<PageNotFound/>,
    },
}