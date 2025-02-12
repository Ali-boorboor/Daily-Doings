import { useTranslation } from "react-i18next";
import { fontSize } from "@st/globalStates";
import { set } from "@/utils/localStorage";
import { useRecoilState } from "recoil";
import { memo } from "react";

function FontSizeSettings() {
  const { t } = useTranslation();
  const [, setFontSize] = useRecoilState(fontSize);

  return (
    <div>
      <p>{t("settingsFontSizeTitle")} :</p>
      <div className="flex justify-start items-center gap-4 w-full pt-4 flex-wrap">
        <div
          className="badge badge-primary cursor-pointer"
          onClick={() => {
            set("font-size", "text-base");
            setFontSize("text-base");
          }}
        >
          {t("settingsFontSizeNormal")}
        </div>
        <div
          className="badge badge-secondary cursor-pointer"
          onClick={() => {
            set("font-size", "text-lg");
            setFontSize("text-lg");
          }}
        >
          {t("settingsFontSizeLarge")}
        </div>
        <div
          className="badge badge-accent cursor-pointer"
          onClick={() => {
            set("font-size", "text-xl");
            setFontSize("text-xl");
          }}
        >
          {t("settingsFontSizeExtraLarge")}
        </div>
      </div>
    </div>
  );
}

export default memo(FontSizeSettings);
