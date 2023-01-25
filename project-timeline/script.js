const pixelsPerDay = 5;
const timeline = document.getElementById("timeline");

window.onload = async function() {
    const now = new Date();
    const timelineHeight = getPixelDistanceToStartingDate(now, pixelsPerDay) * 1.5;
    timeline.style.height = timelineHeight + 'px';
    const repoMap = await getSortedRepositories();

    let alignment = 'right';

    repoMap.forEach((value, key) => {
        appendProjectToTimeline(key, value[1], getPixelDistanceToStartingDate(value[0], pixelsPerDay),alignment);
        if(alignment === 'right'){
            alignment = 'left';
        } else {
            alignment = 'right';
        }
    });
}

function getSortedRepositories(){
    const repoMap = new Map();

    const request = new XMLHttpRequest();
    const url = 'https://api.github.com/users/CodingFactoryT/repos?sort=created&direction=asc'; //url for fething all public repositories, sorted by created_at

    return new Promise((resolve, reject) => {
        request.open("GET", url, true);
        request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200) {
                const repos = JSON.parse(request.responseText);
                repos.forEach(repo => {
                    const repoName = repo.name;
                    const repoCreationDate = new Date(repo.created_at);
                    const formattedRepoCreationDate = repoCreationDate.toLocaleString('default', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    }).replace('/,/g', '.');
                    const repoCreationDateParts = formattedRepoCreationDate.split('.');
                    const day = parseInt(repoCreationDateParts[0]);
                    const month = parseInt(repoCreationDateParts[1]);
                    const year = parseInt(repoCreationDateParts[2]);
                    repoMap.set(repoName, [repoCreationDate, formattedRepoCreationDate]);
                });
                resolve(repoMap);
            } else if (request.readyState === 4) {
                reject(request.statusText);
            }
        }
        request.send();
    });
}

function getPixelDistanceToStartingDate(date, pixelsPerDay){
    const startingDate = new Date(Date.UTC(2022, 0, 1));

    date = new Date(date);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    date = new Date(Date.UTC(year, month, day));
    
    const diff = Math.abs(startingDate.getTime() - date.getTime());
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    return diffInDays * pixelsPerDay;
}

function appendProjectToTimeline(projectName, dateCreated, offset, alignment) {
    timeline.innerHTML += `
        <div class="timelineEntry" style="top: ${offset}px">
            <div class="timelineEntryContainer ${alignment}AlignedEntry">
                <div class="horizontalLine">
                    <div class="projectName ${alignment}AlignedText">${projectName}</div>
                    <div class="dateCreated ${alignment}AlignedText">${dateCreated}</div>
                </div>
            </div>
        </div>
    `;
}