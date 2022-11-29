

async function getProjects() {
    let url = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
