/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ttsars': ['TTsars', 'serif'],
        'gotham': ['Gotham', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fce6d4',
          100: '#f8d4b8',
          200: '#f2c29c',
          300: '#ecb080',
          400: '#e69e64',
          500: '#e08c48',
          600: '#d47a2c',
          700: '#c86810',
          800: '#bc5600',
          900: '#b04400',
        },
        secondary: {
          50: '#f5f4f3',
          100: '#ebe9e6',
          200: '#d7d3cd',
          300: '#c3bdb4',
          400: '#afa79b',
          500: '#9b9182',
          600: '#877b69',
          700: '#736550',
          800: '#5f4f37',
          900: '#4b3d1e',
        },
        accent: {
          50: '#fce6d4',
          100: '#f8d4b8',
          200: '#f2c29c',
          300: '#ecb080',
          400: '#e69e64',
          500: '#e08c48',
          600: '#d47a2c',
          700: '#c86810',
          800: '#bc5600',
          900: '#b04400',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
