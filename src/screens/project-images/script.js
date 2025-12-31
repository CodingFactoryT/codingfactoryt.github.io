import fetchSortedRepositories from "../../util/sortedProjectListFetcher.js";
import projectMap from "./projectMap.js";

const NO_IMAGE_SRC = require("../../resources/images/projectImages/NO_IMAGE_ICON.png");

export default async function fetchSortedProjectMap() {
	const projects = [];
	const repoMap = await fetchSortedRepositories();

	const linkPromises = Array.from(repoMap.keys()).map((repoName) => resolveProjectLink(repoName));
	const resolvedLinks = await Promise.all(linkPromises);

	Array.from(repoMap.entries()).forEach(([repoName, repoData], index) => {
		const icon = projectMap.get(repoName)?.icon ?? NO_IMAGE_SRC;
		projects.push({
			name: repoName,
			link: resolvedLinks[index],
			icon,
		});
	});

	projects.sort((a, b) => compareProjectNames(a, b));

	return projects;
}

async function resolveProjectLink(repoName) {
	const githubPagesURL = `https://timbslr.github.io/${repoName}`;
	const githubRepoURL = `https://github.com/timbslr/${repoName}`;

	if (repoName === "timbslr.github.io") {
		return githubRepoURL;
	}

	try {
		const response = await fetch(githubPagesURL, { method: "HEAD" }); //send HEAD request to check if github pages site exists for that repository
		return response.ok ? githubPagesURL : githubRepoURL;
	} catch (err) {
		return githubRepoURL;
	}
}

function compareProjectNames(projectA, projectB) {
	return projectA.name.localeCompare(projectB.name);
}
