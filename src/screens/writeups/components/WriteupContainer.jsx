import { useState, useEffect } from "react";
import WriteupGithubLink from "./WriteupGithubLink";

export default function WriteupContainer({ children, githubLink }) {
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
			{children}

			<WriteupGithubLink link={githubLink}/>
		</div>
	);
}
