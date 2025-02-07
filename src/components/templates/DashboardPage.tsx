import Dashboard from "@o/Dashboard";
import docTitle from "@/utils/documentTitle";
import { memo, useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    docTitle("Dashboard Page");
  }, []);

  return <Dashboard />;
}

export default memo(DashboardPage);
