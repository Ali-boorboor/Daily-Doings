import i18next from "i18next";
import { get } from "@/utils/localStorage";

const validFontSizes = ["text-base", "text-lg", "text-xl"];
const validLangs = ["en", "fa"];

const validateFontSize = (FontSize: string) => {
  if (validFontSizes.includes(FontSize)) {
    document.documentElement.classList.remove("text-base");
    document.documentElement.classList.remove("text-lg");
    document.documentElement.classList.remove("text-xl");
    document.documentElement.classList.add(FontSize);
  } else {
    document.documentElement.classList.remove("text-base");
    document.documentElement.classList.remove("text-lg");
    document.documentElement.classList.remove("text-xl");
    document.documentElement.classList.add("text-base");
  }
};

const validateLang = (Lang: string) => {
  if (validLangs.includes(Lang)) {
    i18next.changeLanguage(Lang);
  } else {
    i18next.changeLanguage("en");
  }
};

const validateDefaultFontSize = () => {
  const FontSize = get("font-size") || "text-base";

  if (validFontSizes.includes(FontSize)) {
    return FontSize;
  } else {
    return "text-base";
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

export {
  validateFontSize,
  validateLang,
  validateDefaultFontSize,
  validateDefaultLang,
};
