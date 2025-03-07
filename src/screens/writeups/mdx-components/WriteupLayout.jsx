import { useState, useEffect } from "react";
import WriteupGithubLink from "../components/WriteupGithubLink";
import WriteupTitle from "../components/WriteupTitle";

export default function WriteupLayout({ title, dateCreated, githubLink, children }) {
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
        }}
      >
        <WriteupTitle title={title} projectName={"PilotChess-Automatic-Chess-Board"} dateCreated={dateCreated}/>
        {children}
  
        <WriteupGithubLink link={githubLink}/>
      </div>
    );
}
