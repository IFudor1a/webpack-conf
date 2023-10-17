import {Route, Routes, Link} from 'react-router-dom';
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {Suspense} from "react";
export const App = () =>  {
    return (
        <div className="app">
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