import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {ClassNames} from "shared/lib/classNames/ClassNames";
import {AppRoute} from "app/providers/route";
import NavBar from "widgets/NavBar";
import {SideBar} from "widgets/Sidebar";
import {Suspense} from "react";


const App = () => {
    const { theme } = useTheme()
    return (
        <Suspense fallback={"loading ../"}>
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