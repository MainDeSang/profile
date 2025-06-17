// @ts-ignore
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-12">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontakt</h2>
                <p className="text-gray-700 mb-8">#Du möchtest mit mir in Kontakt treten oder hast Fragen?
                Ich freue mich auf deine Nachricht!</p>
                <div className="text-lg text-gray-800 space-y-2">
                    <p><strong>Name:</strong> Johann</p>
                    <p><strong>Email:</strong> <a href="lindelejohann@icloud.com" className="text-blue-600 hover:underline">lindelejohann@icloud.com</a></p>
                    <p><strong>Telefon:</strong> 0152 / 2470 1053</p>
                    <p><strong>Ort:</strong> 86159 Augsburg, Bayern</p>                </div>
            </div>
        </section>
    );
};

export default Contact;