export default function ProjectComponent({projectName, projectLink, projectIcon}) {
    const imageAlt = 'Image of project"' + projectName + '"';
    const handleButtonOnClick = () => {
        window.location=projectLink;
    }

    return (
        <button onClick={handleButtonOnClick} class="projectButton">
            <img class="projectIcon" src={projectIcon} alt={imageAlt}/>
        </button>
    );
}