import Modal from "@a/Modal";
import Router from "@/routes/Router";
import langChangeHandler from "@/utils/langChangeHandler";
import { validateLang } from "@/utils/validateSettings";
import { lang, theme } from "@st/globalStates";
import { useRoutes } from "react-router";
import { useRecoilValue } from "recoil";
import { memo, useEffect } from "react";

function App() {
  const routes = useRoutes(Router);
  const Theme = useRecoilValue(theme);
  const Lang = useRecoilValue(lang);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    validateLang(Lang);
    langChangeHandler(Lang);
  }, [Theme, Lang]);

  return (
    <>
      {routes}
      <Modal />
    </>
  );
}

export default memo(App);
