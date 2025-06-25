// @ts-ignore
import React from 'react';

// Zertifikat-Bilder importieren
// @ts-ignore
import javacert1 from '../assets/certification JAVA-1.pdf'; // Renamed for clarity
// @ts-ignore
import javacert2 from '../assets/Certification Java - 2.pdf';
// @ts-ignore
import datacert from '../assets/Certification - Datenschutz.pdf';
// @ts-ignore
import sqlcert from '../assets/Certification - Datenschutz.pdf';
// @ts-ignore
import gitcert from '../assets/certification-Git-Grundlagen-johann.lindele.pdf';

const certifications = [
    {
        title: 'Java Certificate Part 1',
        issuer: 'Mischok Academy',
        date: 'Sep 2024',
        file: javacert1,
        thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878_960_720.png' // Placeholder for a PDF thumbnail
    },
    {
        title: 'Java Certificate Part 2',
        issuer: 'Mischok Academy',
        date: 'Sep 2024',
        file: javacert2,
        thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878_960_720.png'
    },    {
        title: 'Certificate Data Security',
        issuer: 'Mischok Academy',
        date: 'Jan 2025',
        file: datacert,
        thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878_960_720.png'
    },    {
        title: 'SQL Certificate',
        issuer: 'Mischok Academy',
        date: 'Jan 2024',
        file: sqlcert,
        thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878_960_720.png'
    },    {
        title: 'Git Certificate',
        issuer: 'Mischok Academy',
        date: 'Nov 2024',
        file: gitcert,
        thumbnail: 'https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878_960_720.png'
    },
];

const Certifications = () => {
    return (
        <section className="bg-gradient-to-br from-indigo-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">Zertifikate</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Display a thumbnail or a generic PDF icon */}
                            <img
                                src={cert.thumbnail} // Display the thumbnail
                                alt={`${cert.title}`}
                                className="mb-4 rounded-md object-contain h-34 w-full"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                            <p className="text-gray-600">{cert.issuer}</p>
                            <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                            {/* Link to the PDF file */}
                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            >
                                Zertifikat ansehen
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

