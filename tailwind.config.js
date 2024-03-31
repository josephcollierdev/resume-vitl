import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
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
                    500: '#252422'
                }
            }
        },
    },

    purge: [
        './resources/js/**/*.{vue,js}',
        './resources/views/**/*.blade.php'
    ],

    plugins: [forms],
};
