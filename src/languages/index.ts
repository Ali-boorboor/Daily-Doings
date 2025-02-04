import i18n from "i18next";
import en from "@/languages/en";
import fa from "@/languages/fa";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: en },
  fa: { translation: fa },
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || "en",
});
