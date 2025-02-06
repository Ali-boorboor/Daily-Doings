import {
  validateDefaultFontSize,
  validateDefaultLang,
} from "@/utils/validateSettings";
import { get } from "@/utils/localStorage";
import { atom } from "recoil";

const theme = atom({
  key: "theme",
  default: get("theme") || "dark",
});

const fontSize = atom({
  key: "fontSize",
  default: validateDefaultFontSize(),
});

const isSideBarCollapse = atom({
  key: "isSideBarCollapse",
  default: true,
});

const lang = atom({
  key: "lang",
  default: validateDefaultLang(),
});

export { theme, fontSize, isSideBarCollapse, lang };
