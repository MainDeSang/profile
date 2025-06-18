// @ts-ignore
import React, { useState } from "react";
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(formData);// hier später Email-Versand einbauen
        alert('Nachricht wurde gesendet! (Demo)');
    };

    return (
        <section id="contact" className="bg-white py-12">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-shadow-gray-800 mb-8 text-center">Kontakt</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}

                        <div className="flex items-center gap-3">
                            <User className="text-primary" size={20} />
                            <span><strong>Name:</strong></span>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                        />
                    </div>

                    {/* E-Mail */}
                    <div className="flex items-center gap-3">
                        <Mail className="text-primary" size={20} />
                        <span><strong>Email:</strong> <a href="mailto:..." className="text-blue-600 hover:underline"></a></span>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                        />
                    </div>

                    {/* Nachricht */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-3  bg-amber-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-600 transition"
                        >
                            Nachricht senden
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;