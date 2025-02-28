import EditFolderModal from "@m/ModalsMolecules/EditFolderModal";
import FolderBox from "@m/FoldersMolecules/FolderBox";
import { modalDetails } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function FolderBoxs() {
  const [, setModalDetails] = useRecoilState(modalDetails);

  return (
    <div className="grid gap-4 lg:gap-10 grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] justify-items-center p-4 lg:p-8">
      <FolderBox
        handleClick={() => {
          setModalDetails({ elements: <EditFolderModal />, isShown: true });
        }}
        folderName="Folder A"
        folderID="1"
        folderProgressValue="80"
        index={1}
      />
      <FolderBox
        handleClick={() => {
          setModalDetails({ elements: <EditFolderModal />, isShown: true });
        }}
        folderName="Folder B"
        folderID="2"
        folderProgressValue="50"
        index={2}
      />
    </div>
  );
}

export default memo(FolderBoxs);
