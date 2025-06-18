// @ts-ignore
import React from "react";
// @ts-ignore
import ProfilBild from '../assets/profil.jpg';
// @ts-ignore
import PdfDatei from '../assets/lebenslauf.pdf';
import {FaFilePdf} from "react-icons/fa";

const AboutMe = () => {
    return (
        <section id="about" className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                {/* Bild */}
                <img
                    src={ProfilBild}
                    alt="Profil Bild"
                    className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-blue-500 hover:scale-105 transition"
                />

                {/* Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Über mich</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hallo! Mein Name ist <span className="font-semibold text-blue-600">Johann Lindele</span>.
                        Ich befinde mich aktuell in der Umschulung zum Fachinformatiker für Anwendungsentwicklung.
                        Mit Begeisterung lerne ich moderne Webtechnologien wie React, Vite und TailwindCSS.
                        <br/><br/>
                        Ich suche aktuell ein spannendes Praktikum, um mein Wissen praktisch anzuwenden
                        und in einem Entwicklerteam mitzuarbeiten.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        Hier kannst du meinen Lebenslauf als PDF herunterladen oder online ansehen:
                    </p>

                    {/* PDF Button */}
                    <a
                        href={PdfDatei}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow transition duration-200"
                    >
                        <FaFilePdf className="w-5 h-5"/>
                        Lebenslauf als PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;