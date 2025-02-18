import docTitle from "@/utils/documentTitle";
import FolderBoxs from "@o/FoldersOrganisms/FolderBoxs";
import FolderHeader from "@o/FoldersOrganisms/FolderHeader";
import { memo, useEffect } from "react";

function Folder() {
  useEffect(() => {
    docTitle("Folders Page");
  }, []);

  return (
    <div className=" max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <FolderHeader />
      <FolderBoxs />
    </div>
  );
}

export default memo(Folder);
