const pixelsPerDay = 5;
const timeline = document.getElementById("timeline");

window.onload = async function() {
    const now = new Date();
    const formattedNowDate = now.toLocaleString('default', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace('/,/g', '.');
    document.getElementById("nowDate").textContent = formattedNowDate;

    const timelineHeight = getPixelDistanceToStartingDate(now, pixelsPerDay) * 1.5;
    console.log(timelineHeight);
    timeline.style.height = timelineHeight + 'px';
    const repoMap = await getSortedRepositories();

    repoMap.set('', [now, '']);

    let alignment = 'right';

    repoMap.forEach((value, key) => {
        appendProjectToTimeline(key, value[1], getPixelDistanceToStartingDate(value[0], pixelsPerDay), alignment);
        if(alignment === 'right'){
            alignment = 'left';
        } else {
            alignment = 'right';
        }
    });

    const appearOptions = {
        rootMargin: "-75px 0px -75px 0px"
    }

    const timelineEntryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let alignment = "right";
            if(entry.target.classList.contains("leftAligned")){
                alignment = "left";
            }

            if(entry.isIntersecting){
                entry.target.classList.add(`${alignment}ElementShown`);
                console.log("Make visible");
            } else{
                entry.target.classList.remove(`${alignment}ElementShown`);
                console.log("hide");
            }
        });
    }, appearOptions);

    const elements = document.querySelectorAll(".timelineEntry");
    elements.forEach((element) => timelineEntryObserver.observe(element));
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

function appendProjectToTimeline(projectName, dateCreated, offset, alignment) { //class right-/leftAligned is only for the js script and is not used to style anything
    let lineColor = 'cadetblue';
    let dotColor = 'cadetblue';

    if(projectName === '') {
        lineColor = 'transparent';
        dotColor = 'rgba(5,109,187,1)';
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