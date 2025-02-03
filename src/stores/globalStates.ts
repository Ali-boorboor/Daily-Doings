import { atom } from "recoil";

const theme = atom({
  key: "theme",
  default: localStorage.getItem("theme") || "dark",
});

const fontSize = atom({
  key: "fontSize",
  default: localStorage.getItem("font-size") || "text-base",
});

const isSideBarCollapse = atom({
  key: "isSideBarCollapse",
  default: true,
});

export { theme, fontSize, isSideBarCollapse };
