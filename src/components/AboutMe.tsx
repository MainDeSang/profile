// @ts-ignore
import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Über mich</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Hallo zusammen, Mein Name ist <span className="font-semibold text-violet-700">Johann Lindele</span>.
                    Ich befinde mich aktuell in der Umschulung zum Fachinformatiker für Anwendungsentwicklung.
                    Mit großer Leidenschaft lerne ich moderne Webtechnologien wie React, TailwindCSS und TypeScript.
                    <br/><br/>
                    Mein Ziel ist es, kreative, benutzerfreundliche Anwendungen zu entwickeln und mein Wissen
                    im Rahmen eines Praktikums in einem motivierten Entwicklerteam einzubringen.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;