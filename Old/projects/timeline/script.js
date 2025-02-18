const PIXELS_PER_DAY = 3;
const CURRENT_DATE_PROJECT_NAME = "CURRENT_DATE";

const timeline = document.getElementById("timeline");

window.onload = async function () {
	const currentDate = new Date();
	document.getElementById("currentDate").textContent = formatDate(currentDate);

	const repoMap = await fetchSortedRepositories();
	repoMap.set(CURRENT_DATE_PROJECT_NAME, [currentDate, ""]);
	let alignment = "right";

	let index = 0;
	const VERTICAL_OFFSET = 70;
	let offsetToTop = 0;

	repoMap.forEach((value, key) => {
		const margin = window.screen.height * 0.05 * index;
		offsetToTop = getPixelDistanceToStartingDate(value[0]) + margin + VERTICAL_OFFSET;

		appendProjectToTimeline(key, value[1], offsetToTop, alignment);
		if (alignment === "right") {
			alignment = "left";
		} else {
			alignment = "right";
		}
		index++;
	});

	const timelineEntryObserver = new IntersectionObserver((entries) => {
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
	});

	const elements = document.querySelectorAll(".timelineEntry");
	elements.forEach((element, index) => {
		if (index === elements.length - 1) {
			element.style.opacity = 1;
			element.style.margin = "2% 0";
		} else {
			timelineEntryObserver.observe(element);
		}
	});

	timeline.style.height = offsetToTop + "px";
};

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

function appendProjectToTimeline(projectName, dateCreated, offset, alignment) {
	//class right-/leftAligned is only for the js script and is not used to style anything
	let lineColor = "cadetblue";
	let dotColor = "cadetblue";

	if (projectName === CURRENT_DATE_PROJECT_NAME) {
		projectName = "";
		lineColor = "transparent";
		dotColor = "rgba(5,109,187,1)";
	}

	timeline.innerHTML += `
        <div class="timelineEntry ${alignment}Aligned" style="top: ${offset}px; background-color: ${dotColor};">
            <div class="timelineEntryContainer ${alignment}AlignedEntry">
                <div class="horizontalLine" style="background-color: ${lineColor};">
                    <div class="projectName ${alignment}AlignedText">${projectName}</div>
                    <div class="dateCreated ${alignment}AlignedText">${dateCreated}</div>
                </div>
            </div>
        </div>
    `;
}
