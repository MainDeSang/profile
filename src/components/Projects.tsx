// @ts-ignore
import React from "react";
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

type Project = {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
};

const projects: Project[] = [
    {
        title: "Portfolio-Webseite",
        description: "Diese persönliche Website zur Vorstellung meiner Person und Berwerbung für ein Praktikum.",
        technologies: ["React", "Vite", "TailwindCSS"],
        github: "https://github.com/MainDeSang/profile.git",
    },
    {
        title: "Timetracker",
        description: "Eine kleine App zum Eintragen von Zeiten wie z.b. Arbeitszeiten oder zur Dokumentation von Projekten.",
        technologies: ["React", "TypeScript"],
        github: "https://github.com/MainDeSang/timetracker.git",
    },
    {
        title: "ToDo - App",
        description: "Eine Webanwendung um sich ToDo Listen anzulegen und zu bearbeiten. Bei bedarf können Projekte damit verwaltet werden.",
        technologies: ["Java", "SpringBoot"],
        github: "https://github.com/MainDeSang/to-do-liste.git",
    },
    {
        title: "Tic-Tac-Toe",
        description: "Meine erste Anwendung in Java. Ein kleines Tic-Tac-Toe Spiel.",
        technologies: ["Java",],
        github: "https://github.com/MainDeSang/Tic_Tac_Toe_Project.git",
    },
    // Weiter Projekte können hier hinzugefügt werden!
];

const Projects = () => {
    return (
        <section id="projects" className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projekte</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 text-sm text-blue-600 mb-4">
                                {project.technologies.map((t, i) => (
                                    <span key={i} className="bg-blue-50 px-2 py-1 rounded">
                    {t}
                  </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-4 h-4"/>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;