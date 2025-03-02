import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import PieChart from "@m/Charts/PieChart";
import BarChart from "@m/Charts/BarChart";
import docTitle from "@/utils/documentTitle";
import Overview from "@o/DashboardOrganisms/Overview";
import RecentTable from "@o/DashboardOrganisms/RecentTable";
import { memo, useEffect } from "react";

function DashboardPage() {
  const { data } = useGetReq({
    queryKey: "TODOS-OVERVIEW",
    url: "/todo/get-overview",
    cacheTime: 86400000,
    staleTime: 86400000,
  });
  const { data: foldersOverviewData } = useGetReq({
    queryKey: "FOLDERS-OVERVIEW",
    url: "/folder/get-overview",
    cacheTime: 86400000,
    staleTime: 86400000,
  });
  const { data: recentTableData } = useGetReq({
    queryKey: "RECENT-TODOS",
    url: "/todo/get-recent",
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  useEffect(() => {
    docTitle("Dashboard Page");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-10 max-w-screen-2xl m-auto">
      <Overview data={data?.data} />
      <div className="flex justify-between items-center w-full flex-wrap lg:flex-nowrap gap-4 lg:gap-10">
        <PieChart data={data?.data} />
        <BarChart
          foldersOverview={foldersOverviewData?.data?.foldersOverview}
        />
      </div>
      {recentTableData?.status !== 204 ? (
        <RecentTable data={recentTableData?.data?.todos} />
      ) : (
        <NoDataAlert />
      )}
    </div>
  );
}

export default memo(DashboardPage);
