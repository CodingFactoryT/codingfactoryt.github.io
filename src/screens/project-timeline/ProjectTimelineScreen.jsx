import React from "react";
import sortedProjectListFetcher from '../../util/sortedProjectListFetcher.js';
import './style.css';

export default function ProjectTimelineScreen() {
    return (
        <>
            <title>Project Timeline</title>
            <div id="timeline"></div>
            <div id="currentDateContainer">
                <div id="currentDateTitle">Today</div>
                <div id="currentDate"></div>
            </div>
            <script src={sortedProjectListFetcher}></script>
            <script src='./script.js'></script>
        </>
    );
}