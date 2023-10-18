import {Route, Routes, Link} from 'react-router-dom';
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import '../styles/index.scss';
import {Theme, ThemeContext} from "../theme/themeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";

export const App = () =>  {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to='/'>
                Main Page
            </Link>
            <Link to='/about'>
                About Website
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                       <Route path='/about' element={<AboutPageAsync/>}/>
                       <Route path='/' element={<MainPageAsync/>}/>
               </Routes>
            </Suspense>
        </div>
    )
}