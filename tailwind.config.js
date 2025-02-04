import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
        lalezar: "lalezar",
      },
      transitionTimingFunction: {
        sidebar: "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  daisyui: {
    themes: ["emerald", "retro", "dark", "dracula", "nord", "dim", "night"],
  },
  plugins: [daisyui],
};
