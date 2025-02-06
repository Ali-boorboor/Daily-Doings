import { RiEnglishInput } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { set } from "@/utils/localStorage";
import { SiFavro } from "react-icons/si";
import { lang } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function LangTogleBtn() {
  const [Lang, setLang] = useRecoilState(lang);
  const { t } = useTranslation();

  const langChangeHandler = () => {
    if (Lang === "en") {
      setLang("fa");
      set("lang", "fa");
    } else if (Lang === "fa") {
      setLang("en");
      set("lang", "en");
    }
  };

  return (
    <label className="flex items-center cursor-pointer gap-2">
      <div className="tooltip tooltip-bottom" data-tip={t("langEnBtn")}>
        <RiEnglishInput className="w-5 h-5" />
      </div>
      <input
        onChange={langChangeHandler}
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller toggle-secondary"
        defaultChecked={Lang === "fa"}
      />
      <div className="tooltip tooltip-bottom" data-tip={t("langFaBtn")}>
        <SiFavro className="w-5 h-5" />
      </div>
    </label>
  );
}

export default memo(LangTogleBtn);
