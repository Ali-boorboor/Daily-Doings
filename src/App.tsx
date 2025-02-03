import Router from "@/routes/Router";
import { useRoutes } from "react-router";
import { memo, useEffect } from "react";

function App() {
  const routes = useRoutes(Router);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "drakula";

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return <>{routes}</>;
}

export default memo(App);
