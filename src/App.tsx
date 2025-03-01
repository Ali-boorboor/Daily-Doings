import Toast from "@a/Toast";
import Modal from "@a/Modal";
import Loading from "@a/Loading";
import Router from "@/routes/Router";
import langChangeHandler from "@/utils/langChangeHandler";
import { validateLang } from "@/utils/validateSettings";
import { hasLoading, lang, theme } from "@st/globalStates";
import { useRoutes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { memo, useEffect } from "react";

function App() {
  const isLoading = useRecoilValue(hasLoading);
  const Theme = useRecoilValue(theme);
  const Lang = useRecoilValue(lang);
  const routes = useRoutes(Router);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    validateLang(Lang);
    langChangeHandler(Lang);
  }, [Theme, Lang]);

  return (
    <>
      {routes}
      <Modal />
      <Toast />
      {isLoading && <Loading />}
    </>
  );
}

export default memo(App);
