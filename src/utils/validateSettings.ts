import i18next from "i18next";
import { get } from "@/utils/localStorage";

const validLangs = ["en", "fa"];

const validateLang = (Lang: string) => {
  if (validLangs.includes(Lang)) {
    i18next.changeLanguage(Lang);
  } else {
    i18next.changeLanguage("en");
  }
};

const validateDefaultLang = () => {
  const Lang = get("lang") || "en";

  if (validLangs.includes(Lang)) {
    return Lang;
  } else {
    return "en";
  }
};

export { validateLang, validateDefaultLang };
