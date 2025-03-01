import Divider from "@a/Divider";
import HeaderTitle from "@a/HeaderTitle";
import ThemePalette from "@m/ThemePalette";
import docTitle from "@/utils/documentTitle";
import NavigateBtns from "@m/SettingsMolecules/NavigateBtns";
import LanguageSettings from "@m/SettingsMolecules/LanguageSettings";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { FaUser } from "react-icons/fa";
import { memo, useEffect } from "react";

function Settings() {
  const { t } = useTranslation();
  const [cookies] = useCookies(["cover", "username"]);

  useEffect(() => {
    docTitle("Settings Page");
  }, []);

  return (
    <div className="badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg max-w-screen-2xl m-auto">
      <HeaderTitle
        style="badge-primary rounded-b-full drop-shadow-lg text-xl md:text-2xl p-2 text-center"
        title={t("settingsLink")}
      />
      <div className="ring-accent ring-offset-base-100 w-40 h-40 my-6 mx-auto rounded-full overflow-hidden ring ring-offset-2">
        {cookies?.cover ? (
          <img
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
            src={cookies?.cover}
          />
        ) : (
          <FaUser className="w-full h-full bg-cover" />
        )}
      </div>
      <p className="text-center text-lg font-bold">{cookies?.username}</p>
      <div className="p-4 mt-4">
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
