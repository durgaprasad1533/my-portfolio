import React from 'react';

const Projects = () => {
    const projectList = [
        { name: "Project 1", description: "A great project.", link: "#" },
        { name: "Project 2", description: "Another awesome project.", link: "#" }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
