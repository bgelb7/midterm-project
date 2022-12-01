
window.addEventListener("load", async () => {

    await renderProjects()



});

const url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2 ";

async function fetchProjects() {
    let response = await fetch(url);

    let data = await response.json();
    console.log(data);


    console.log("data", data);
    return data.slice(0, 4);

    const random = data[Math.floor(Math.random())];

}


async function renderProjects(); {

    let projects = await fetchProjects();
    let html = " ";
    projects.forEach(project => {

        let htmlSegment = `<div class="project1">
                            <img src="${project.image}" >
                            
                            <div class='projectText'>
                            
                            <h4 class="bodyIntrotextMedium"> ${project.name}  </h4>
                            
                            <p class="headlinetextRegular">${project.description} </p>
                            
                           <a class="headLinetextRegular" href="./project.html?uuid=${project.uuid}"> learn more</a>
                            
                            
                            </div>
                        </div>`;

        html += htmlSegment;
    });
    let projectsWrap = document.querySelector('.projectsWrap');
    projectsWrap.innerHTML = html;
}
renderProjects();
