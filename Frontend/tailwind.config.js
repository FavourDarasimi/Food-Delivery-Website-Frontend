/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "0px",
      md: "750px",
      lg: "1050px",
    },
    extend: {
      backgroundImage: {
        "custom-image": "url('/transformed.jpeg')",
      },
      backgroundColor: {
        "dark-yellow": "#B59410",
        myGray: "#323232",
        dark: "#00000090",
        grey: "#c9c9c9",
      },
      height: {
        110: "850px",
        35: "15vh",
        38: "38vh",
        "100%": "100%",
      },
      width: {
        "90%": "90%",
        "100%": "100%",
        "200%": "180%",
        "80%": "80%",
        68: "200px",
        79: "400px",
        99: "410px",
        100: "450px",
        110: "50vw",
      },
      borderRadius: {
        xmd: "10px",
      },
      fontSize: {
        xsl: "14px",
        xssl: "16px",
        xxl: "18px",
        "1xl": "22px",
      },
      colors: {
        "dark-yellow": "#B59410",
        myGrey: "#676767",
        textcol: "#c9c9c9",
        locktext: "#16AF25",
      },
      padding: {
        1: "4px",
      },

      keyframes: {
        smoothFade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
      },
      animation: {
        smoothfade: "smoothFade 3s",
        "2smoothfade": "smoothFade 1s",
      },
      zIndex: {
        1: "1",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
        6: "6px",
      },
      borderColor: {
        bordercol: "#c9c9c9",
      },
      boxShadow: {
        "custom-strong": "0 10px 15px -3px rgba(0,0,0,0.5), 0,4px 6px -2px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
