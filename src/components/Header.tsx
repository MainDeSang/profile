// @ts-ignore
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
// @ts-ignore
import PdfDatei from '../assets/lebenslauf.pdf';
import { FaFilePdf } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // useState import von React nutzen

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo / Titel */}
                <a href="#" className="text-3xl font-extrabold text-orange-400 tracking-tight hover:text-blue-700 transition duration-200">
                    Johann Lindele
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
                    <a href="#about" className="hover:text-blue-600 transition duration-200">Über mich</a>
                    <a href="#projects" className="hover:text-blue-600 transition duration-200">Projekte</a>
                    <a href="#contact" className="hover:text-blue-600 transition duration-200">Kontakt</a>
                    <a
                        href={PdfDatei}
                        download="Johann_Lindele_Lebenslauf.pdf" // Dateiname präzisiert
                        className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                        rel="noopener noreferrer" // Wichtig für Sicherheit bei target="_blank"
                    >
                        <FaFilePdf className="w-5 h-5" />
                        Lebenslauf
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button className="md:hidden text-gray-700 hover:text-blue-600 transition duration-200" onClick={toggleMenu} aria-label="Menü öffnen/schließen">
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menü (Conditional Rendering für bessere Animation vorbereitet) */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl p-4 transition-all duration-300 ease-in-out origin-top animate-slide-down">
                    <a href="#about" className="block py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-200" onClick={toggleMenu}>Über mich</a>
                    <a href="#projects" className="block py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-200" onClick={toggleMenu}>Projekte</a>
                    <a href="#contact" className="block py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-200" onClick={toggleMenu}>Kontakt</a>
                    <a
                        href={PdfDatei}
                        download="Johann_Lindele_Lebenslauf.pdf"
                        className="mt-4 block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-semibold shadow-md transition duration-200"
                        rel="noopener noreferrer"
                        onClick={toggleMenu} // Schließt Menü nach Klick
                    >
                        <FaFilePdf className="inline-block mr-2" />
                        Lebenslauf herunterladen
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;