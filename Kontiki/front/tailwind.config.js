/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {'primary-text' : '#29335c',},
      fontFamily: {
        sans:['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
