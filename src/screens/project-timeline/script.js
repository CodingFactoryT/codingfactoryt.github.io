import formatDate from "../../util/formatDate.js";
import fetchSortedRepositories from "../../util/sortedProjectListFetcher";

const PIXELS_PER_DAY = 2;
const CURRENT_DATE_PROJECT_NAME = "CURRENT_DATE";

export default async function getTimelineEntries() {
	const timelineEntries = [];
	const currentDate = new Date();
	document.getElementById("currentDate").textContent = formatDate(currentDate); //TODO why does this work?

	const repoMap = await fetchSortedRepositories();
	repoMap.set(CURRENT_DATE_PROJECT_NAME, [currentDate, ""]);
	let alignment = "right";

	let index = 0;
	const VERTICAL_OFFSET = 70;
	let offsetToTop = 0;

	repoMap.forEach((value, key) => {
		const margin = window.screen.height * 0.05 * index;
		offsetToTop = getPixelDistanceToStartingDate(value[0]) + margin + VERTICAL_OFFSET;

		const projectName = key;
		const dateCreated = value[1];
		timelineEntries.push({ projectName, dateCreated, alignment, offsetToTop, ...getColors(projectName) }); //projectName, dateCreated, alignment, offset, dotColor, lineColor
		if (alignment === "right") {
			alignment = "left";
		} else {
			alignment = "right";
		}
		index++;
	});

	/* const timelineEntryObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			let alignment = "right";
			if (entry.target.classList.contains("leftAligned")) {
				alignment = "left";
			}

			if (entry.isIntersecting) {
				entry.target.classList.add(`${alignment}ElementShown`); //make the element visible
			} else {
				entry.target.classList.remove(`${alignment}ElementShown`); //hide the element
			}
		});
	}); */

	/* const elements = document.querySelectorAll(".timelineEntry");
	elements.forEach((element, index) => {
		if (index === elements.length - 1) {
			element.style.opacity = 1;
			element.style.margin = "2% 0";
		} else {
			timelineEntryObserver.observe(element);
		}
	}); */

	return { timelineEntries, offsetToTop };
}

function getPixelDistanceToStartingDate(date) {
	const startingDate = new Date(Date.UTC(2022, 0, 1));

	date = new Date(date);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();
	date = new Date(Date.UTC(year, month, day));

	const diff = Math.abs(startingDate.getTime() - date.getTime());
	const diffInDays = diff / (1000 * 60 * 60 * 24);
	return diffInDays * PIXELS_PER_DAY;
}

function getColors(projectName) {
	//class right-/leftAligned is only for the js script and is not used to style anything
	let lineColor = "cadetblue";
	let dotColor = "cadetblue";

	if (projectName === CURRENT_DATE_PROJECT_NAME) {
		projectName = "";
		lineColor = "transparent";
		dotColor = "rgba(5,109,187,1)";
	}

	return { dotColor, lineColor };
}
