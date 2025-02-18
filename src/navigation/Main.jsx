import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import DatenschutzScreen from "../screens/datenschutz/DatenschutzScreen";
import HomePageScreen from "../screens/homepage/HomePageScreen";
import ProjectTimelineScreen from "../screens/project-timeline/ProjectTimelineScreen";
import NotFoundScreen from "../screens/notfound/NotFoundScreen";
import ContactScreen from "../screens/contact/ContactScreen";
import ProjectImagesScreen from "../screens/project-images/ProjectImagesScreen";

export default function Main() {
    return (
        <HashRouter>
            <Routes>
                <Route path ="/" element={<HomePageScreen/>}/>
                <Route path ="/project-timeline" element={<ProjectTimelineScreen/>}/>
                <Route path ="/project-images" element={<ProjectImagesScreen/>}/>
                <Route path ="/contact" element={<ContactScreen/>}/>
                <Route path ="/datenschutz" element={<DatenschutzScreen/>}/>
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </HashRouter>
    );
}