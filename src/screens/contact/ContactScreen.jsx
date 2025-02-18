import "./style.css"

export default function ContactScreen() {
    const handleEmailButtonClicked = () => {
        window.open("mailto:codingfactoryt@gmail.com");        
    }

    const handleDiscordButtonClicked = () => {
        window.open("https://discord.gg/deftTGQzb2");
    }

    return (
        <>
            <script src="./script.js"></script>
          
            <title>Contact</title>
            <div id="contactContainer">
                <input type="button" id="emailContactButton" onClick={handleEmailButtonClicked}/>
                <input type="button" id="discordContactButton" onClick={handleDiscordButtonClicked}/>
            </div>
        </>
    );
}