/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './componentsProps/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
        colors: {
            white: '#FFFFFF',
            whitePrimary: '#E5E5E5',
            bluePrimary: '#16ABF8',
            blackPrimary: '#111111',
            grayPrimary: '#888888',
            graySecondary: '#F4F4F4',
            redPrimary: '#ED4C5C',
        }
    },
    plugins: []
};
