import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import docTitle from "@/utils/documentTitle";
import TodosTable from "@o/TableOrganisms/TodosTable";
import { memo, useEffect } from "react";

function Table() {
  const { data } = useGetReq({
    queryKey: "ALL-TODOS",
    url: "/todo/get-all",
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  useEffect(() => {
    docTitle("Table Page");
  }, []);

  if (data?.status !== 204) {
    return <TodosTable data={data?.data} />;
  } else {
    return (
      <div className="max-w-screen-2xl m-auto flex flex-col gap-4 lg:gap-10">
        <NoDataAlert />
      </div>
    );
  }
}

export default memo(Table);
