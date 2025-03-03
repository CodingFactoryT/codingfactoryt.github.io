import ImageProvider from "../../../components/ImageProvider";

export default function WriteupSection({ title, number, text, projectName, imageName }) {
	return (
		<div style={{marginBottom: "200px"}}>
			<div style={{
				fontSize: "4rem",
				fontFamily: "Google Sans, sans-serif",
				marginLeft: "20%", marginBottom: "10px",
				color: "white"
			}}>

				{title}
			</div>

			<ImageProvider projectName={projectName} imageName={imageName} style={{
				position: "relative",
				height: "40vh",
				marginRight: "10px",
				float: "left",
				aspectRatio: "1"
			}}>

				<div style={{
					position: "absolute",
					top: "-30%",
					left: "-15%",
					opacity: "0.25",
					zIndex: "-1",
					color: "#9facbd",
					fontSize: "10rem",
					fontFamily: "Google Sans, sans-serif",
					fontWeight: "bold"
				}}>
					{String(number).padStart(2, "0")}
				</div>
			</ImageProvider>
			<p style={{color: "#E2E2E2",whiteSpace: "pre-line", fontSize: "1.2rem" }}>{text}</p>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
