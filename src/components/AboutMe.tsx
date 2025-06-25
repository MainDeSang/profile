// @ts-ignore
import React from "react";
// @ts-ignore
import ProfilBild from '../assets/profil.jpg'; // Stelle sicher, dass der Pfad korrekt ist
// @ts-ignore
import PdfDatei from '../assets/lebenslauf.pdf'; // Stelle sicher, dass der Pfad korrekt ist
import { FaFilePdf } from "react-icons/fa"; // Für das PDF-Icon7
// @ts-ignore
import BGProfil from '../assets/programminBG.jpg';

const AboutMe = () => {
    return (
        <section id="about" className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:flex">
                {/* Bild Bereich */}
                <div
                    className="md:flex-shrink-0 md:w-1/3 p-8 flex justify-center items-center bg-blue-100 relative" // 'relative' für absolute Positionierung des Hintergrundbildes
                    style={{
                        backgroundImage: `url(${BGProfil})`, // Pfad zu deinem Hintergrundbild
                        backgroundSize: 'cover', // Deckt den gesamten Bereich ab
                        backgroundPosition: 'center', // Zentriert das Bild
                        backgroundRepeat: 'no-repeat', // Verhindert Wiederholung
                    }}
                >
                    <img
                        src={ProfilBild}
                        alt="Profil Bild von Johann Lindele"
                        className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-orange-400 transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:border-blue-500"
                    />
                </div>

                {/* Text und Lebenslauf-Download Bereich */}
                <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
                        Über mich
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Hallo! Mein Name ist <strong className="font-semibold text-orange-400">Johann Lindele</strong>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Seit September 2024 absolviere ich meine Umschulung an der <strong className="text-blue-600">Mischok Academy in Augsburg</strong>.
                        Diese Ausbildung vermittelt mir nicht nur fundierte Kenntnisse in der <strong className="text-blue-600">Softwareentwicklung</strong>, sondern auch methodische Kompetenzen im <strong className="text-blue-600">Projektmanagement</strong> und der <strong className="text-blue-600">agilen Zusammenarbeit</strong>.
                        Zu meinen Stärken zählen eine strukturierte, zielorientierte Arbeitsweise, ein hohes Maß an Kundenorientierung sowie ein sicherer und freundlicher Umgang mit Anwendern.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Besonders begeistern mich die Konzeption und Realisierung <strong className="text-blue-600">benutzerfreundlicher Softwarelösungen</strong>.
                        Mit Engagement, Lernbereitschaft und positiver Energie bringe ich mich gerne in neue Projekte ein. Neben <strong className="text-blue-600">sauberem, gut dokumentiertem Code</strong> lege ich großen Wert auf präzise Planung und klare Kommunikation im Team.
                    </p>

                    {/* PDF Button */}
                    <div className="mt-auto text-center md:text-left"> {/* mt-auto schiebt den Button nach unten */}
                        <p className="text-md text-gray-600 mb-4">
                            Möchten Sie mehr erfahren? Laden Sie meinen vollständigen Lebenslauf herunter:
                        </p>
                        <a
                            href={PdfDatei}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
                        >
                            <FaFilePdf className="w-5 h-5 mr-2" />
                            Lebenslauf herunterladen
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;