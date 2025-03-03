import WriteupContainer from "../components/WriteupContainer";
import WriteupTitle from "../components/WriteupTitle";
import WriteupSection from "../components/WriteupSection";
import ThreeDModellingText from "./text/3D-Modelling.txt"
import GatheringPartsText from "./text/Gathering Parts.txt"
import AssemblyText from "./text/Assembly.txt"

import useFetchTextFile from "../../../hooks/useFetchTextFile";

export default function PilotChessWriteup() {
	let counter = 1;

	const getCounter = () => counter++;

	return (
		<WriteupContainer githubLink={"https://github.com/CodingFactoryT/PilotChess-Automatic-Chess-Board"}>
			<WriteupTitle title={"Pilot Chess"} projectName="PilotChess-Automatic-Chess-Board" dateCreated="03.03.2025"/>
							
			<div style={{position: "absolute", top: "25vh", color: "orange", fontSize: "1rem"}}>
				This write-up is still in progress! There could be missing text, images, etc.
			</div>
			
			<WriteupSection title={"3D-Modelling"} number={getCounter()} text={useFetchTextFile(ThreeDModellingText).data}/>
			<WriteupSection title={"Gathering Parts"} number={getCounter()} text={useFetchTextFile(GatheringPartsText).data}/>
			<WriteupSection title={"Assembly"} number={getCounter()} text={useFetchTextFile(AssemblyText).data}/>
		</WriteupContainer>	
	);
}