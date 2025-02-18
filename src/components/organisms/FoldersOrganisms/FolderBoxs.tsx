import FolderBox from "@m/FoldersMolecules/FolderBox";
import { memo } from "react";

function FolderBoxs() {
  return (
    <div className="grid gap-4 lg:gap-10 grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] justify-items-center p-4 lg:p-8">
      <FolderBox folderName="Folder A" folderProgressValue="80" index={1} />
      <FolderBox folderName="Folder B" folderProgressValue="50" index={2} />
    </div>
  );
}

export default memo(FolderBoxs);
