import Overview from "@o/DashboardOrganisms/Overview";
import docTitle from "@/utils/documentTitle";
import { memo, useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    docTitle("Dashboard Page");
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Overview />
    </div>
  );
}

export default memo(DashboardPage);
