<script>

    async function fetchProjects() {

        const API_URL = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2');
    const response = await fetch(API_URL);
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2')
            .then((response) => response.json())
            .then((data) => console.log(data));

    }

</script>