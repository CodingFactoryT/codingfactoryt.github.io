import ImageProvider from "../../../components/ImageProvider";
import { FaClockRotateLeft } from "react-icons/fa6"
import { BiCalendarEdit } from "react-icons/bi";

export default function WriteupTitle({ title, projectName, dateCreated }) {
	const height = "5rem"

	return (
		<div style={{ 
			display: "flex",
			alignItems: "center",
			height: height,
			gap: "10px",
			marginBottom: "170px",
		}}>
			<ImageProvider projectName={projectName} imageName={"Icon"} style={{height: "100%", borderRadius: "10px", aspectRatio: "1"}} />
			<div
				style={{
					position: "relative",
					color: "white",
					fontSize: height,
					fontFamily: "Google Sans, sans-serif",
				}}
			>
				{title}
				<div style={{
					position: "absolute",
					display: "flex",
					gap: "50px",
					alignItems: "center",
					left: 0,
					bottom: "-1.3rem",
					fontSize: "1.2rem",
					color: "gray",
				}}>
					<div style={{display: "flex", justifyContent: "space-between", gap: "5px"}}>
						<div><FaClockRotateLeft/></div>
						<div>{getFormattedTodayDate()}</div>
					</div>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "20px", gap: "5px"}}>
						<div><BiCalendarEdit size="1.3em"/></div>
						<div>{dateCreated}</div>
					</div>

				</div>
			</div>
		</div>
	);
}

function getFormattedTodayDate() {
	const today = new Date();
	return new Intl.DateTimeFormat('de-DE', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(today);
}