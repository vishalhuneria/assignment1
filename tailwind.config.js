/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{'darkgreen' : "#004733"},
      backgroundSize: {
        'custom-size': '25% 50%',
      },
      backgroundPosition: {
        'custom-position': 'top right',
        "padding-top":"60px"
      },
      // backgroundImage: {
      //   'hero-pattern': "url('/assets/hero-variant.webp')"  
    },
  },
  plugins: [],
}

