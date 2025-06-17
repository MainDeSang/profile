// @ts-ignore
import React from "react";

type Project = {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
};

const projects: Project[] = [
    {
        title: "Portfolio-Webseite",
        description: "Diese persönliche Website zur Vorstellung meiner Person und Berwerbung für ein Praktikum.",
        technologies: ["React", "Vite", "TailwindCSS"],
        link: "https://github.com/MainDeSang/profile.git",
    },
    {
        title: "Timetracker",
        description: "Eine kleine App zum Eintragen von Zeiten wie z.b. Arbeitszeiten",
        technologies: ["React", "TypeScript"],
        link: "https://github.com/MainDeSang/timetracker.git",
    },
    {
        title: "ToDo - App",
        description: "Eine Webanwendung um sich ToDo Listen anzulegen und zu bearbeiten. Bei bedarf können Projekte damit verwaltet werden.",
        technologies: ["Java", "SpringBoot"],
        link: "https://github.com/MainDeSang/to-do-liste.git",
    },
    {
        title: "Tic-Tac-Toe",
        description: "Meine erste Anwendung in Java. Ein kleines Tic-Tac-Toe Spiel.",
        technologies: ["Java",],
        link: "https://github.com/MainDeSang/Tic_Tac_Toe_Project.git",
    },
    // Weiter Projekte können hier hinzugefügt werden!
];

const Projects = () => {
    return (
        <section id="projects" className="bg-white py-12">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meine Projekte</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="text-blue-600 hover:underline text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Projekt ansehen
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;