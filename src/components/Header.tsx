// @ts-ignore
import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Mein Portfolio</h1>
                <nav className="space-x-6">
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition">Über mich</a>
                    <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projekte</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;