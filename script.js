// Static sample jobs
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Remote",
        description: "Build responsive UI components using HTML, CSS, JavaScript."
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "BlueSoft",
        location: "Bangalore",
        description: "Work on Express APIs and database systems."
    }
];

// Save applications locally
function saveApplication(jobId, name, email, resume) {
    const apps = JSON.parse(localStorage.getItem("applications")) || [];
    apps.push({ jobId, name, email, resume });
    localStorage.setItem("applications", JSON.stringify(apps));
}
