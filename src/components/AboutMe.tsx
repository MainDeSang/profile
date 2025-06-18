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

                        Seit September 2024 absolviere ich meine Umschulung an der Mischok Academy in Augsburg.
                        Die Ausbildung vermittelt mir nicht nur fundierte Kenntnisse in der Softwareentwicklung, sondern
                        auch methodische Kompetenzen im Projektmanagement und der agilen Zusammenarbeit.
                        Zu meinen Stärken zählen eine strukturierte, zielorientierte Arbeitsweise, ein hohes Maß an
                        Kundenorientierung sowie ein sicherer und freundlicher Umgang mit Anwendern.

                        ________________________________________________________________________________________________

                        Besonders begeistern mich die Konzeption und Realisierung benutzerfreundlicher Softwarelösungen.
                        Mit Engagement, Lernbereitschaft und positiver Energie bringe ich mich gerne in neue Projekte
                        ein. Neben sauberem, gut dokumentiertem Code lege ich großen Wert auf präzise Planung und klare
                        Kommunikation im Team.

                    </p>
                </div>
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <p className="text-lg px-5 text-gray-700 mb-4">
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