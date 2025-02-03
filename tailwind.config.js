import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
        "roboto-bold": "roboto-bold",
        "roboto-italic": "roboto-italic",
      },
    },
  },
  daisyui: {
    themes: ["emerald", "fantasy", "dark", "drakula", "nord", "garden"],
  },
  plugins: [daisyui],
};
