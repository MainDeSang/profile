// @ts-ignore
import React from "react";
import {FaGithub} from 'react-icons/fa';

type Project = {
    title: string;
    description: string;
    technologies: string[];
    github?: string; // Optionaler GitHub-Link
};

const projects: Project[] = [
    {
        title: "Portfolio-Webseite",
        description: "Diese persönliche Website stellt meine Fähigkeiten vor und dient der Bewerbung für ein Praktikum. Sie ist responsive und benutzerfreundlich.",
        technologies: ["React", "Vite", "TailwindCSS"],
        github: "https://github.com/MainDeSang/profile.git",
    },
    {
        title: "Timetracker App",
        description: "Eine intuitive Webanwendung zur effizienten Erfassung von Arbeitszeiten und zur Dokumentation von Projektphasen, ideal für Freelancer und Teams.",
        technologies: ["React", "TypeScript", "Node.js", "Express"], // Beispiele für mehr Technologien
        github: "https://github.com/MainDeSang/timetracker.git",
    },
    {
        title: "ToDo - App mit Spring Boot",
        description: "Eine robuste Backend-Anwendung zum Verwalten von To-Do-Listen und Projekten, entwickelt mit einem Fokus auf Skalierbarkeit und einfacher API-Interaktion.",
        technologies: ["Java", "SpringBoot", "PostgreSQL", "RESTful API"],
        github: "https://github.com/MainDeSang/to-do-liste.git",
    },
    {
        title: "Tic-Tac-Toe Spiel (Java)",
        description: "Meine erste Anwendung in Java – ein klassisches Tic-Tac-Toe Spiel mit einer einfachen Konsole-Benutzeroberfläche, perfekt zum Erlernen der Grundlagen.",
        technologies: ["Java", "CLI"],
        github: "https://github.com/MainDeSang/Tic_Tac_Toe_Project.git",
    },
    {
        title: "E-Commerce Mockup",
        description: "Ein Frontend-Mockup für einen Online-Shop, das verschiedene Produktkategorien, einen Warenkorb und eine einfache Checkout-Ansicht darstellt.",
        technologies: ["Next.js", "TypeScript", "Sanity.io", "Stripe"],
        github: "https://github.com/yourusername/ecommerce-mockup.git", // Beispielprojekt
    },
    // Weitere Projekte können hier hinzugefügt werden!
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
                    Meine Projekte
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Projektkarten */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{project.title}</h3>
                            <p className="text-gray-700 mb-5 flex-grow">{project.description}</p> {/* flex-grow für gleiche Höhe */}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-auto"> {/* mt-auto für Buttons am unteren Rand */}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium rounded-full text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-md"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-5 h-5 mr-2"/>
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;