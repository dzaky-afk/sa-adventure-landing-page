/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        serif: ['var(--font-playfair)', '"Playfair Display"', 'serif'],
      },
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-gray': '#f8f9fa',
      },
    },
  },
  plugins: [],
};
