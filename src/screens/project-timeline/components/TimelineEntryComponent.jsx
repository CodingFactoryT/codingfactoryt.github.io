export default function TimelineEntryComponent({ projectName, dateCreated, alignment, offsetToTop, dotColor, lineColor }) {
    console.log(offsetToTop);
    if(projectName === "CURRENT_DATE") {
        projectName = "";
    }
    
    return (
        <div 
            className={`timelineEntry ${alignment}Aligned`} 
            style={{ top: `${offsetToTop}px`, backgroundColor: dotColor }}
        >
            <div className={`timelineEntryContainer ${alignment}AlignedEntry`}>
                <div className="horizontalLine" style={{ backgroundColor: lineColor }}>
                    <div className={`projectName ${alignment}AlignedText`}>{projectName}</div>
                    <div className={`dateCreated ${alignment}AlignedText`}>{dateCreated}</div>
                </div>
            </div>
        </div>
    );
}
