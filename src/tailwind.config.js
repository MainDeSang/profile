/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],

                colors: {
                    primary: '#2563eb', // Blau
                    secondary: '#f1f5f9', // Hellgrau
                    accent: '#0ea5e9', // Türkis
                },
            },
        },
    },
    plugins: [],
};
