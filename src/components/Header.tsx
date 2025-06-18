// @ts-ignore
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
// @ts-ignore
import PdfDatei from '../assets/lebenslauf.pdf';
import {FaFilePdf} from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Titel */}
                <h1 className="text-2xl font-bold text-orange-400">Mein Portfolio</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-gray-700">
                    <a href="#about" className="hover:text-blue-600">Über mich</a>
                    <a href="#projects" className="hover:text-blue-600">Projekte</a>
                    <a href="#contact" className="hover:text-blue-600">Kontakt</a>
                    <a
                        href={PdfDatei}
                        download="Lebenslauf_MaxMustermann.pdf"
                        className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium shadow transition duration-200"
                    >
                        <FaFilePdf className="w-5 h-5" />
                        Lebenslauf herunterladen
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menü */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4">
                    <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">Über mich</a>
                    <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600">Projekte</a>
                    <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Kontakt</a>
                </div>
            )}
        </header>
    );
};

export default Header;