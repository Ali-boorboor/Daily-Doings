import { validateDefaultLang } from "@/utils/validateSettings";
import { get } from "@/utils/localStorage";
import { atom } from "recoil";
import {
  modalDetailsStateType,
  toastDetailsStateType,
} from "@type/globalTypes";

const hasLoading = atom({
  key: "hasLoading",
  default: false,
});

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

const toastDetails = atom<toastDetailsStateType>({
  key: "toastDetails",
  default: {
    title: "",
    toastState: "alert-success",
    ringState: "ring-success",
    isShown: false,
  },
});

export {
  hasLoading,
  theme,
  isSideBarCollapse,
  lang,
  modalDetails,
  toastDetails,
};
