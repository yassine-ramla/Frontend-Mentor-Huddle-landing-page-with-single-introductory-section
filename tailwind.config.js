/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        myViolet: "hsl(257, 40%, 49%)",
        mySoftMagenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        "desktop": "url(../images/bg-desktop.svg)",
        "mobile": "url(../images/bg-mobile.svg)",
      },
      fontFamily: {
        popins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      gridTemplateRows: {
        3: "repeat(3, auto)",
      }
    },
  },
  plugins: [],
};
