import { get } from "@/utils/localStorage";
import { atom } from "recoil";

const theme = atom({
  key: "theme",
  default: get("theme") || "dark",
});

const fontSize = atom({
  key: "fontSize",
  default: get("font-size") || "text-base",
});

const isSideBarCollapse = atom({
  key: "isSideBarCollapse",
  default: true,
});

export { theme, fontSize, isSideBarCollapse };
