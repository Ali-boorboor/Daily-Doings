import useGetReq from "@/hooks/useGetReq";
import docTitle from "@/utils/documentTitle";
import TodosStickyWalls from "@o/StickyWallOrganisms/TodosStickyWalls";
import { memo, useEffect } from "react";

function StickyWall() {
  const { data } = useGetReq({
    queryKey: "ALL-TODOS",
    url: "/todo/get-all",
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  useEffect(() => {
    docTitle("Sticky Wall Page");
  }, []);

  return <TodosStickyWalls data={data?.data} />;
}

export default memo(StickyWall);
