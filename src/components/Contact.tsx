// @ts-ignore
import React, {useState} from "react";
import {Mail, Phone, MapPin, User} from 'lucide-react';
// @ts-ignore
import contact from "../assets/contacme.jpg"

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // hier später E-Mail-Versand einbauen
        alert('Nachricht wurde gesendet! (Demo)');
    };

    return (
        <section id="contact"
                 className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8"
                 style={{
                     backgroundImage: `url(${contact}`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                 }}>
            <div className="max-w-3xl mx-auto  rounded-xl shadow-2xl p-8 md:p-12
                bg-white/70 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/100">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
                    Kontaktiere mich
                </h2>

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
                                <p className="text-gray-700 text-base">+49 152 24701053</p> {/* Telefonnummer */}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <MapPin className="text-blue-600 flex-shrink-0" size={24}/>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                                <p className="text-gray-700 text-base">Firnhaberstraße 12A, 86159 Augsburg -
                                    Hochfeld</p> {/* Adresse */}
                            </div>
                        </div>

                        {/* Social Media Links könnten hier hinzugefügt werden */}
                    </div>

                    {/* Kontaktformular */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10 pr-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="Deine E-Mail-Adresse"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Deine Nachricht an uns..."
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            >
                                Nachricht senden
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