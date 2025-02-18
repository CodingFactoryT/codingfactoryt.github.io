function fetchSortedRepositories() {
	const repoMap = new Map();

	const request = new XMLHttpRequest();
	const url = "https://api.github.com/users/CodingFactoryT/repos?sort=created&direction=asc"; //url for fething all public repositories, sorted by created_at

	return new Promise((resolve, reject) => {
		request.open("GET", url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				const repos = JSON.parse(request.responseText);
				repos.forEach((repo) => {
					const repoName = repo.name;
					const repoCreationDate = new Date(repo.created_at);
					const formattedRepoCreationDate = formatDate(repoCreationDate);
					repoMap.set(repoName, [repoCreationDate, formattedRepoCreationDate]);
				});
				resolve(repoMap);
			} else if (request.readyState === 4) {
				reject(request.statusText);
			}
		};
		request.send();
	});
}

function formatDate(date) {
	return date
		.toLocaleString("default", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})
		.replace("/,/g", ".");
}
