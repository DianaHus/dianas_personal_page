/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Serif per i titoli — elegante e con carattere
        serif: ['Playfair Display', 'Georgia', 'serif'],
        // Sans-serif per il corpo — leggibile e moderna
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
