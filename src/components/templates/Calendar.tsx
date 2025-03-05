import useGetReq from "@/hooks/useGetReq";
import docTitle from "@/utils/documentTitle";
import CalendarChart from "@o/CalendarOrganisms/CalendarChart";
import { memo, useEffect, useState } from "react";

function Calendar() {
  const [todosDate, setTodosDate] = useState([]);
  const { data } = useGetReq({
    queryKey: "ALL-TODOS",
    url: "/todo/get-all",
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  useEffect(() => {
    docTitle("Calendar Page");

    const todoDates = data?.data?.todos?.map((todo: any) => ({
      title: todo.subject,
      start: todo.createdAt,
    }));

    setTodosDate(todoDates);
  }, [data]);

  return <CalendarChart data={todosDate} />;
}

export default memo(Calendar);
