import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import DatenschutzScreen from "../screens/datenschutz/DatenschutzScreen";
import HomePageScreen from "../screens/homepage/HomePageScreen";

export default function Main() {
    return (
        <HashRouter>
            <Routes>
                <Route path ="/" element={<HomePageScreen/>}/>
                <Route path ="/datenschutz" element={<DatenschutzScreen/>}/>
            </Routes>
        </HashRouter>
    );
}