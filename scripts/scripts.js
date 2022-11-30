async function getProjects(project) {

    let url = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2';
    try {
        let promise1 = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2');
        return await res.json();
    } catch (error) {
        console.log(error);
    }




}



function getProjects(project) {

    let promise1 = fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2')
    promise1.then(function (response) {
        console.log(response);
    })
}

getProjects(project1)


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}