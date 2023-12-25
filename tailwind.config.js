/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
       hermit: "'hermit-regular',sans",
       popins: ['Poppins', 'sans-serif']
      },
      colors : {
        primary : "#64ffda",
        titleColor : "#CCD6F6",
        subTitleColor: "#8892B0",
        pColor : "#8892b0"
        
      },
     
      textColor : {
        textColor : "#e6f1ff",
      },
      
    },
  },
  plugins: [require("daisyui")],
}

