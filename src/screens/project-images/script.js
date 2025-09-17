import fetchSortedRepositories from "../../util/sortedProjectListFetcher.js";
import projectMap from "./projectMap.js";

const NO_IMAGE_SRC = require("../../resources/images/projectImages/NO_IMAGE_ICON.png");

export default async function fetchSortedProjectMap() {
	const projects = [];

	const repoMap = await fetchSortedRepositories();
	repoMap.forEach((value, repoName) => {
		const repoLink = `https://github.com/timbslr/${repoName}`;
		const icon = projectMap.get(repoName) ? projectMap.get(repoName).icon : NO_IMAGE_SRC;
		projects.push({ name: repoName, link: repoLink, icon: icon });
	});

	projects.sort((a, b) => compareProjectNames(a, b));

	return projects;
}

function compareProjectNames(projectA, projectB) {
	return projectA.name.localeCompare(projectB.name);
}
