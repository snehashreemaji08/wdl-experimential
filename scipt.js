// DATA (no JSON needed)
const facultyData = [
    {
        name: "Dr. Yogesh Panke",
        subject: "Mathematics",
        experience: "15 Years",
        image: "https://i.pinimg.com/236x/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg"
    },
    {
        name: "Prof. Sunil Kemdeo",
        subject: "Chemistry",
        experience: "20 Years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4soQ-a64k8N1LCyGO4UIL4ms3NYNt_JloOQ&s"
    },
    {
        name: "Prof. Mayur Kadu",
        subject: "Web Development",
        experience: "16 Years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHiOkdUUgZf7ZGh6HKhyfoPBCQTZjw3yLZA&s"
    },
    {
        name: "Prof. Yuvraj Chauhan",
        subject: "Electrical",
        experience: "5 Years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHiOkdUUgZf7ZGh6HKhyfoPBCQTZjw3yLZA&s"
    }
];

// DISPLAY FUNCTION
function displayFaculty(data) {
    const container = document.getElementById("facultyContainer");
    container.innerHTML = "";

    data.forEach(f => {
        container.innerHTML += `
            <div class="faculty-card">
                <img src="${f.image}">
                <h3>${f.name}</h3>
                <p>Subject: ${f.subject}</p>
                <p>Experience: ${f.experience}</p>
            </div>
        `;
    });
}

// SEARCH FUNCTION
function searchFaculty() {
    const value = document.getElementById("searchBox").value.toLowerCase();

    const filtered = facultyData.filter(f =>
        f.name.toLowerCase().includes(value) ||
        f.subject.toLowerCase().includes(value)
    );

    displayFaculty(filtered);
}

// LOAD DATA
displayFaculty(facultyData);
