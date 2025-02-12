import Divider from "@a/Divider";
import HeaderTitle from "@a/HeaderTitle";
import ThemePalette from "@m/ThemePalette";
import docTitle from "@/utils/documentTitle";
import NavigateBtns from "@m/SettingsOrganisms/NavigateBtns";
import FontSizeSettings from "@m/SettingsOrganisms/FontSizeSettings";
import LanguageSettings from "@m/SettingsOrganisms/LanguageSettings";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

function Settings() {
  const { t } = useTranslation();

  useEffect(() => {
    docTitle("Settings Page");
  }, []);

  return (
    <div className="badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg max-w-screen-2xl m-auto">
      <HeaderTitle
        style="badge-primary rounded-b-full drop-shadow-lg text-xl md:text-2xl p-2 text-center"
        title={t("settingsLink")}
      />
      <div className="p-4 mt-4">
        <FontSizeSettings />
        <Divider />
        <ThemePalette styleThemesContainer="justify-start gap-4 px-1" />
        <Divider />
        <LanguageSettings />
        <Divider />
        <NavigateBtns />
      </div>
    </div>
  );
}

export default memo(Settings);
