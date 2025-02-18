import '../../resources/variables.css';
import logoLeftArrow from '../../resources/images/logoLeftArrow.png';
import logoRightArrow from '../../resources/images/logoRightArrow.png';
import './logoStyle.css';
import './selectStyle.css';

export default function HomePageScreen() {
    return (
        <>
            <title>CodingFactoryT</title>
            <script src="script.js"></script>
            <div id="container">
                <button onclick="projectTimeline_Clicked()" id="projectTimelineButton" class="selectButton">Project Timeline</button>
                <button onclick="contactButton_Clicked()" id="contactButton" class="selectButton">Contact</button>
                <button onclick="projectImagesButton_Clicked()" id="projectImagesButton" class="selectButton">Project Images</button>
                <a id="logoText" href="https://github.com/CodingFactoryT">CodingFactoryT</a>
                <img id="logoLeftArrowImage" src={logoLeftArrow} alt="Left side of the CodingFactoryT logo"/>
                <img id="logoRightArrowImage" src={logoRightArrow} alt="Right side of the CodingFactoryT logo"/>
            </div>
        </>
    );
}