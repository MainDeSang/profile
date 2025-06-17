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
        link: "#", // LINK HINZUFÜGEN
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
]