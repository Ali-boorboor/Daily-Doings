import TodosStickyWalls from "@o/StickyWallOrganisms/TodosStickyWalls";
import docTitle from "@/utils/documentTitle";
import { memo, useEffect } from "react";

function StickyWall() {
  useEffect(() => {
    docTitle("Sticky Wall Page");
  }, []);

  return <TodosStickyWalls />;
}

export default memo(StickyWall);
