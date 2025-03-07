import useGetReq from "@/hooks/useGetReq";
import docTitle from "@/utils/documentTitle";
import TodosStickyWalls from "@o/StickyWallOrganisms/TodosStickyWalls";
import { page } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function StickyWall() {
  const [pageCount, setPageCount] = useRecoilState(page);
  const { data }: any = useGetReq({
    queryKey: ["ALL-TODOS", `PAGE=${pageCount}`],
    url: `/todo/get-all?limit=9&page=${pageCount}`,
    cacheTime: 86400000,
    staleTime: 86400000,
  });

  useEffect(() => {
    docTitle("Sticky Wall Page");

    return () => setPageCount(1);
  }, []);

  return <TodosStickyWalls data={data} />;
}

export default memo(StickyWall);
