/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './main.js', './lib/canva.js', './styles/*.css'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
