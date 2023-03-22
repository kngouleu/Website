document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Project 1",
            description: "This is a description of Project 1.",
            link: "https://example.com/project1",
            img: "https://via.placeholder.com/300x200"
        },
        {
            title: "Project 2",
            description: "This is a description of Project 2.",
            link: "https://example.com/project2",
            img: "https://via.placeholder.com/300x200"
        }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const projectImg = document.createElement("img");
        projectImg.src = project.img;
        projectImg.alt = project.title;
        projectDiv.appendChild(projectImg);

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        const projectLink = document.createElement("a");
        projectLink.textContent = "View Project";
        projectLink.href = project.link;
        projectDiv.appendChild(projectLink);

        projectList.appendChild(projectDiv);
    });
});
