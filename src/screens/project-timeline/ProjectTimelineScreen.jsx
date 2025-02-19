import React, { useEffect, useState } from "react";
import './style.css';
import TimelineEntryComponent from "./components/TimelineEntryComponent.jsx";
import getTimelineEntries from "./script.js";

export default function ProjectTimelineScreen() {
    //projectName, dateCreated, alignment, offset, dotColor, lineColor

    const [timelineEntries, setTimelineEntries] = useState([]);
    const [timelineHeight, setTimelineHeight] = useState(0);
    
    useEffect(() => {
        getTimelineEntries().then(({ offsetToTop, timelineEntries }) => {
            setTimelineEntries(timelineEntries);
            setTimelineHeight(offsetToTop);
        });
    }, []);

    return (
        <>
            <title>Project Timeline</title>
            <div id="timeline" style={{ height: `${timelineHeight}px`}}>
                {timelineEntries.map((timelineEntry) => {
                                console.log(timelineEntries);
                    return <TimelineEntryComponent {...timelineEntry} key={timelineEntry.projectName}/>
                })}
            </div>
            <div id="currentDateContainer">
                <div id="currentDateTitle">Today</div>
                <div id="currentDate"></div>
            </div>
        </>
    );
}