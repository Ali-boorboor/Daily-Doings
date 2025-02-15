import { validateDefaultLang } from "@/utils/validateSettings";
import { get } from "@/utils/localStorage";
import { atom } from "recoil";

const theme = atom({
  key: "theme",
  default: get("theme") || "dark",
});

const isSideBarCollapse = atom({
  key: "isSideBarCollapse",
  default: true,
});

const lang = atom({
  key: "lang",
  default: validateDefaultLang(),
});

export { theme, isSideBarCollapse, lang };
