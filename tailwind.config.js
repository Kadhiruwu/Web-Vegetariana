/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-fondo': "url('/images/fondo.jpg')", // Reemplaza la ruta con la de tu imagen
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'], // Añade aquí tu fuente
      },
    },
  },
  plugins: [],
}

