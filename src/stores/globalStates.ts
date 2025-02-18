import { validateDefaultLang } from "@/utils/validateSettings";
import { modalDetailsStateType } from "@type/globalTypes";
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

const modalDetails = atom<modalDetailsStateType>({
  key: "modalDetails",
  default: { elements: null, isShown: false },
});

export { theme, isSideBarCollapse, lang, modalDetails };
