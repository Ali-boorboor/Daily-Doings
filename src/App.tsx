import Router from "@/routes/Router";
import { fontSize, theme } from "@st/globalStates";
import { useRoutes } from "react-router";
import { useRecoilValue } from "recoil";
import { memo, useEffect } from "react";

function App() {
  const routes = useRoutes(Router);
  const Theme = useRecoilValue(theme);
  const FontSize = useRecoilValue(fontSize);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    document.documentElement.classList.add(FontSize);
  }, [Theme, FontSize]);

  return <>{routes}</>;
}

export default memo(App);
