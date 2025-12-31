import React, { useEffect, useState } from "react";
import "./projectButtonStyle.css";
import "./style.css";
import fetchSortedProjectMap from "./script.js";
import projectMap from "./projectMap";
import ProjectComponent from "./components/ProjectComponent";

export default function ProjectImagesScreen() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchSortedProjectMap(projectMap).then((projects) => {
			console.log(projects);
			setProjects(projects);
		});
	}, []);

	return (
		<>
			<title>Project Images</title>
			<div id="projectContainer">
				{projects.map((project) => (
					<ProjectComponent projectName={project.name} projectLink={project.link} projectIcon={project.icon} key={project.link} />
				))}
			</div>

			<script src="./projectMap.js"></script>
			<script src="../../util/sortedProjectListFetcher.js"></script>
			<script src="./script.js"></script>
		</>
	);
}
