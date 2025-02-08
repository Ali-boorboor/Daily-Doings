import Table from "@m/Table";
import PieChart from "@m/Charts/PieChart";
import BarChart from "@m/Charts/BarChart";
import docTitle from "@/utils/documentTitle";
import Overview from "@o/DashboardOrganisms/Overview";
import { memo, useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    docTitle("Dashboard Page");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-10 max-w-screen-2xl m-auto">
      <Overview />
      <div className="flex justify-between items-center w-full flex-wrap lg:flex-nowrap gap-4 lg:gap-10">
        <PieChart />
        <BarChart />
      </div>
      <Table />
    </div>
  );
}

export default memo(DashboardPage);
