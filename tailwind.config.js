import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                // lato: ['Lato', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                ui: ['Segoe UI', 'system-ui', 'sans-serif'],
                resume: ['Georgia', 'serif'],
            },
            colors: {
                'azure': {
                    300: '#F3F6F6',
                    500: '#D1E0DF',
                    700: '#A2C0BE',
                    900: '#6D9A97'
                },
                'platinum': {
                    300: '#F4F5F7',
                    500: '#D6DBE4',
                    700: '#ACB6C9',
                    900: '#7B8AA7'
                },
                'seashell': {
                    300: '#FFFDFC',
                    500: '#FFF5EE',
                    700: '#FFE8D7',
                    900: '#FAD1B1'
                },
                'floral-white': {
                    300: '#FFFEFC',
                    500: '#FFF9EE',
                    700: '#FFF1D7',
                    900: '#FAE1B1'
                },
                'stark-white': {
                    500: '#CCC5B9'
                },
                'space-shuttle': {
                    500: '#403D39'
                },
                'black-magic': {
                    500: '#252422',
                    600: '#1E1D1B'
                },
                'sorbus': {
                    500: '#EB5E28'
                },
                bg: '#0f0f11',
                'bg-surface': '#16161a',
                'bg-raised': '#1c1c21',
                border: '#2a2a32',
                'border-strong': '#38383f',
                'text-primary': '#e8e4f0',
                'text-secondary': '#9994aa',
                'text-tertiary': '#55505f',
                accent: '#7f77dd',
                'accent-deep': '#534ab7',
                'accent-dim': '#2a2640',
                teal: '#1d9e75',
                'teal-dim': '#0d3326',
                'teal-border': '#0f6e56',
            }
        },
    },

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    plugins: [forms],
};
