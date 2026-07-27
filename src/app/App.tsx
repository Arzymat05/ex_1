import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {ClassNames} from "shared/lib/classNames/ClassNames";
import {AppRoute} from "app/providers/route";
import NavBar from "widgets/NavBar";
import {SideBar} from "widgets/Sidebar";
import {Suspense} from "react";
import {PageLoaders} from "widgets/PageLoader";


const App = () => {
    const { theme } = useTheme()

    return (
        <Suspense fallback={<PageLoaders/>}>
            <div className={ClassNames("app", {hoverd:false},[theme])}>
                <NavBar/>
                <div className='content-page'>
                    <SideBar />
                    <AppRoute/>
                </div>
            </div>
        </Suspense>
    );
};

export default App;