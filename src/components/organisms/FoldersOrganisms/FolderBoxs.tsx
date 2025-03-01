import FolderBox from "@m/FoldersMolecules/FolderBox";
import { memo } from "react";

function FolderBoxs() {
  return (
    <div className="flex gap-4 lg:gap-10 justify-center items-center flex-wrap p-4 lg:p-8">
      <FolderBox
        folderName="Folder A"
        folderID="1"
        folderProgressValue="80"
        index={1}
      />
      <FolderBox
        folderName="Folder B"
        folderID="2"
        folderProgressValue="50"
        index={2}
      />
    </div>
  );
}

export default memo(FolderBoxs);
