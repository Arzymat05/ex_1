import {RouteProps} from "react-router-dom";
import { HomePage } from "pages/HomePage";
import {AboutPage} from "pages/AboutUs";


export enum AppRoute {
    MAINPAGE = "main",
    ABOUTUS = "about",
}

export const AppRouteConfig:Record<AppRoute, string> ={
    [AppRoute.MAINPAGE]:'/',
    [AppRoute.ABOUTUS]:'/about',
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
}