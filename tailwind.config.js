/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    DEFAULT: '#121217',
                    2: '#6C6C89',
                    3: '#8A87A0',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    2: '#f0edff',
                },
                border: '#e8e3ff',
                primary: {
                    DEFAULT: '#5423E7',
                    hover: '#4118c8',
                    s: '#f0ecff',
                },
            },
            fontFamily: {
                sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
                heading: ['"DM Sans"', 'sans-serif'],
            },
            boxShadow: {
                'nav': '0 8px 28px rgba(84, 35, 231, 0.22)',
                'btn': '0 1px 3px rgba(0, 0, 0, 0.08)',
                'btn-hover': '0 2px 8px rgba(0, 0, 0, 0.10)',
                'card-hover': '0 8px 32px rgba(84, 35, 231, 0.07)',
            },
            animation: {
                'nav-drop': 'nav-drop 0.55s cubic-bezier(.34, 1.56, .64, 1) both',
                'word-rotate': 'word-rotate 0.5s cubic-bezier(.77, 0, .18, 1)',
            },
            keyframes: {
                'nav-drop': {
                    'from': { opacity: '0', transform: 'translateX(-50%) translateY(-14px)' },
                    'to': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
                },
                'word-rotate': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
