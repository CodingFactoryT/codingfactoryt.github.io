import DefaultIcon from "../resources/images/projectImages/NO_IMAGE_ICON.png";
import { useEffect, useState } from "react";

export default function ImageProvider({ projectName, imageName, style, children }) {
	const [icon, setIcon] = useState(DefaultIcon);

	useEffect(() => {
		try {
			setIcon(require(`../resources/images/projectImages/${projectName}/${imageName}.png`));
		} catch(e){}
	}, [projectName, imageName]);
	
	return (
		<div style={style}>
			<img src={icon} style={{height: "100%", width: "100%", borderRadius: style.borderRadius}} alt={`Icon of ${projectName}`} />
			{children}
		</div>
	);
}