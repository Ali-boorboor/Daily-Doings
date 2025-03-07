import FolderBox from "@m/FoldersMolecules/FolderBox";
import { getAllFoldersResType } from "@type/organismsTypes";
import { memo } from "react";

function FolderBoxs({ data }: getAllFoldersResType) {
  return (
    <div className="flex gap-4 lg:gap-10 justify-center items-center flex-wrap p-4 lg:p-8">
      {data?.data?.folders?.map((folder, index) => {
        return (
          <FolderBox
            key={++index}
            folderName={folder?.name}
            folderID={folder?._id}
            index={++index}
          />
        );
      })}
    </div>
  );
}

export default memo(FolderBoxs);
