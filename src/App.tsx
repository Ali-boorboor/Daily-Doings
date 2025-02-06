import Router from "@/routes/Router";
import langChangeHandler from "@/utils/langChangeHandler";
import { validateFontSize, validateLang } from "@/utils/validateSettings";
import { fontSize, lang, theme } from "@st/globalStates";
import { useRoutes } from "react-router";
import { useRecoilValue } from "recoil";
import { memo, useEffect } from "react";

function App() {
  const routes = useRoutes(Router);
  const Theme = useRecoilValue(theme);
  const FontSize = useRecoilValue(fontSize);
  const Lang = useRecoilValue(lang);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    validateFontSize(FontSize);
    validateLang(Lang);
    langChangeHandler(Lang);
  }, [Theme, FontSize, Lang]);

  return <>{routes}</>;
}

export default memo(App);
