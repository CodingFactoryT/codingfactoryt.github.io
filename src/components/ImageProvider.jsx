import { useState } from "react";
import DefaultIcon from "../resources/images/projectImages/NO_IMAGE_ICON.png";

export default function ImageProvider({ projectName, imageName, style, children }) {

	const [icon, setIcon] = useState(`../resources/images/projectImages/${projectName}/${imageName}.png`);

	const handleError = () => {
		setIcon(DefaultIcon);
	};
	
	return (
		<div style={style}>
			<img src={icon} style={{height: "100%", width: "100%", borderRadius: style.borderRadius}} onError={handleError} alt={`Icon of ${projectName}`} />
			{children}
		</div>
	);
}