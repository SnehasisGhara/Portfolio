/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        signature : "Great Vibes", 
      },
      boxShadow:{
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px -19px #262a2e",
      },
    },
    

  },
  plugins: [],
}

