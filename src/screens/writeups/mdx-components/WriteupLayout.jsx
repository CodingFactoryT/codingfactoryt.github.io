import { useState, useEffect } from "react";
import WriteupGithubLink from "../components/WriteupGithubLink";
import WriteupTitle from "../components/WriteupTitle";

export default function WriteupLayout({ title, dateCreated, dateModified, githubLink, children }) {
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);
  
    useEffect(() => {
      const updateOrientation = () => {
        setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
      };
  
      window.addEventListener("resize", updateOrientation);
      return () => window.removeEventListener("resize", updateOrientation);
    }, []);
  
    return (
      <div
        style={{
          margin: isPortrait ? "5vh 10%" : "5vh 25%",
          color: "#fafcfe"  //#848a99 or a bit lighter for text
        }}
      >
        <WriteupTitle title={title} projectName={"PilotChess-Automatic-Chess-Board"} dateCreated={dateCreated} dateModified={dateModified}/>
        {children}
  
        <WriteupGithubLink link={githubLink}/>
      </div>
    );
}
