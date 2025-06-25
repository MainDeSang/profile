// @ts-ignore
import React from "react";
// @ts-ignore
import BGDev from "../assets/keyboardBG.jpg";

const Text = () => {
    return (
        <section
            id="info"
            className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{
                backgroundImage: `url(${BGDev})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Füge diese Zeile hinzu oder stelle sicher, dass sie korrekt ist:
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="max-w-3xl mx-auto rounded-xl shadow-xl p-8 md:p-10 text-center relative overflow-hidden
               bg-white/70 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/100"
            >
                {/* Optionaler Hintergrundeffekt für eine visuelle Auflockerung */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-xl transform -rotate-3 scale-105 opacity-50 blur-md -z-10"></div>

                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold mb-6">
                    Dieses Praktikum ist ein <span className="text-blue-600">fester Bestandteil meiner Umschulung</span> und kann ab <span className="text-blue-600">September 2025</span> begonnen werden. Für Sie entstehen dabei <span className="text-blue-600">keinerlei Kosten</span>.
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                    Mein Ziel ist es, nicht nur <span className="text-orange-400">praktische Erfahrungen</span> zu sammeln, sondern auch einen <span className="text-orange-400">echten Mehrwert für Ihr Team</span> zu schaffen.
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold mt-8">
                    Gerne überzeuge ich Sie in einem <span className="text-blue-600">persönlichen Gespräch</span> von meiner <span className="text-blue-600">Motivation und Eignung</span>. Ich freue mich auf Ihre <span className="text-blue-600">Einladung</span>.
                </p>
            </div>
        </section>
    );
};

export default Text;