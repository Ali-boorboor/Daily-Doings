import { useTranslation } from "react-i18next";
import LangTogleBtn from "@m/LangTogleBtn";
import { memo } from "react";

function LanguageSettings() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("settingsLanguageTitle")} :</p>
      <div className="w-28 pt-4">
        <LangTogleBtn />
      </div>
    </div>
  );
}

export default memo(LanguageSettings);
