/** @type {import('tailwindcss').Config} */
// import tailwindcssAnimated from "tailwindcss-animated";
// import tailwindScrollbar from "tailwind-scrollbar";
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir tus archivos TSX
  ],
  theme: {
    extend: {
      colors: {
        primary: "#52AE32",
        secondary: "#028454",
        tertiary: "#777777",
        default: "#777777",
        primaryDark: "#18181B",
        secondaryDark: "#000000",
        titleDark: "#d1d5db",
        textDark: "#f9fafb",
      },
    },
  },
  plugins: [
  ],
};
