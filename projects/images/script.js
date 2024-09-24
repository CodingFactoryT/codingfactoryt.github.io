const NO_IMAGE_SRC = "../../assets/projectImages/NO_IMAGE_ICON.png";
const projectContainer = document.getElementById("projectContainer");

const projects = fetchSortedProjectMap(projectMap).then((projects) => {
	addProjectsToView(projects);
});

async function fetchSortedProjectMap() {
	const projects = [];

	const repoMap = await fetchSortedRepositories();
	repoMap.forEach((value, repoName) => {
		const repoLink = `https://github.com/CodingFactoryT/${repoName}`;
		const iconPath = projectMap.get(repoName) ? projectMap.get(repoName).iconPath : NO_IMAGE_SRC;
		const imagesFolderPath = projectMap.get(repoName) ? projectMap.get(repoName).imagesFolderPath : "NO IMAGES AVAILABLE";

		projects.push({ name: repoName, link: repoLink, iconPath: iconPath, imagesFolderPath: imagesFolderPath });
	});

	projects.sort((a, b) => compareProjectNames(a, b));
	console.log(projects);
	return projects;
}

async function addProjectsToView(projects) {
	projects.forEach((project) => {
		addProjectToView(project.name, project.link, project.iconPath, project.imagesFolderPath);
	});
}

function addProjectToView(projectName, projectLink, projectIconPath, projectImagesFolderPath) {
	projectContainer.innerHTML += `
        <div class="projectButton">
            <img class="projectIcon" src="${projectIconPath}" "alt="${projectName}-Image"
        </div>
    `;
}

function compareProjectNames(projectA, projectB) {
	return projectA.name.localeCompare(projectB.name);
}
