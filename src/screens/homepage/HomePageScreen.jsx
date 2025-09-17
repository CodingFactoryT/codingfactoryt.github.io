import '../../resources/variables.css';
import logoLeftArrow from '../../resources/images/logoLeftArrow.png';
import logoRightArrow from '../../resources/images/logoRightArrow.png';
import './logoStyle.css';
import './selectStyle.css';
import { useNavigate } from "react-router-dom";

export default function HomePageScreen() {
    const navigate = useNavigate();

    const handleTimelineRedirect = () => {
        console.log("Hello Timeline!");
        navigate("/project-timeline");
    }

    const handleProjectImagesRedirect = () => {
        navigate("/project-images");
    }

    const handleContactRedirect = () => {
        navigate("/contact");
    }

    return (
        <>
            <title>TimBslr</title>
            <script src="script.js"></script>
            <div id="container">
                <button onClick={handleTimelineRedirect} id="projectTimelineButton" class="selectButton">Project Timeline</button>
                <button onClick={handleContactRedirect} id="contactButton" class="selectButton">Contact</button>
                <button onClick={handleProjectImagesRedirect} id="projectImagesButton" class="selectButton">Project Images</button>
                <a id="logoText" href="https://github.com/CodingFactoryT">Tim Bslr</a>
                <img id="logoLeftArrowImage" src={logoLeftArrow} alt="Left side of the CodingFactoryT logo"/>
                <img id="logoRightArrowImage" src={logoRightArrow} alt="Right side of the CodingFactoryT logo"/>
            </div>
        </>
    );
}
