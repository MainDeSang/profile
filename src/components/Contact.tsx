// @ts-ignore
import React, {useState, useEffect} from "react"; // Added useEffect
import {Mail, Phone, MapPin, User} from 'lucide-react';
// @ts-ignore
import contact from "../assets/contacme.jpg";
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree hooks

const Contact = () => {
    // Formspree hook initialization with your form ID
    // Make sure to replace "movwpwwl" with your actual Formspree form ID
    const [state, handleSubmit] = useForm("movwpwwl");

    // State for custom success/error messages
    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [messageContent, setMessageContent] = useState('');

    // Function to display custom message box
    const displayMessage = (type: string, content: string) => {
        setMessageType(type);
        setMessageContent(content);
        setShowMessage(true);
        // Hide message after 5 seconds
        setTimeout(() => {
            setShowMessage(false);
            setMessageContent('');
            setMessageType('');
        }, 5000);
    };

    // useEffect to handle Formspree submission results
    useEffect(() => {
        if (state.succeeded) {
            displayMessage('success', 'Nachricht wurde erfolgreich gesendet! Ich melde mich in Kürze bei Ihnen.');
            // Reset the form fields after successful submission
            const form = document.getElementById('contactForm') as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
        // Robustere Fehlerprüfung: Überprüft, ob state.errors ein Array mit Inhalt ist ODER ein Objekt mit Schlüsseln (für globale Fehler)
        if (state.errors && !state.submitting && !state.succeeded) {
            const hasErrors = (Array.isArray(state.errors) && state.errors.length > 0) ||
                (!Array.isArray(state.errors) && Object.keys(state.errors).length > 0);

            if (hasErrors) {
                displayMessage('error', 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
            }
        }
    }, [state.succeeded, state.errors, state.submitting]); // Dependencies for useEffect

    return (
        <section id="contact"
                 className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8"
                 style={{
                     backgroundImage: `url(${contact}`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                 }}>
            <div className="max-w-3xl mx-auto rounded-xl shadow-2xl p-8 md:p-12
                bg-white/85 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/100">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
                    Kontaktiere mich
                </h2>

                {/* Custom Message Box for success/error */}
                {showMessage && (
                    <div className={`p-4 mb-6 rounded-md text-center ${
                        messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {messageContent}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Kontaktinformationen */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-4">
                            <Mail className="text-blue-600 flex-shrink-0" size={24}/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">E-Mail</h3>
                                <a href="mailto:lindelejohann@icloud.com"
                                   className="text-orange-400 hover:underline text-base">
                                    lindelejohann@icloud.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Phone className="text-blue-600 flex-shrink-0" size={24}/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Telefon</h3>
                                <p className="text-gray-700 text-base">+49 152 24701053</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <MapPin className="text-blue-600 flex-shrink-0" size={24}/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                                <p className="text-gray-700 text-base">Firnhaberstraße 12A, 86159 Augsburg -
                                    Hochfeld</p>
                            </div>
                        </div>
                    </div>

                    {/* Kontaktformular */}
                    <form onSubmit={handleSubmit} className="space-y-6" id="contactForm"> {/* Added id for form reset */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                <input
                                    type="text"
                                    name="name" // Formspree will pick this up by its name attribute
                                    id="name"
                                    required
                                    className="pl-10 pr-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="Dein Name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                <input
                                    type="email"
                                    name="email" // Formspree will pick this up
                                    id="email"
                                    required
                                    className="pl-10 pr-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="Deine E-Mail-Adresse"
                                />
                                {/* Formspree email validation message */}
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1" // Tailwind class for error message style
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                            <textarea
                                name="message" // Formspree will pick this up
                                id="message"
                                rows={5}
                                required
                                className="p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Deine Nachricht an uns..."
                            ></textarea>
                            {/* Formspree message validation message */}
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-red-500 text-sm mt-1" // Tailwind class for error message style
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={state.submitting} // Disable button during submission
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            >
                                {state.submitting ? 'Senden...' : 'Nachricht senden'} {/* Change text during submission */}
                                <Mail className="ml-2 -mr-1" size={20}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;