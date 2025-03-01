import Button from "@a/Button";
import RemoveModal from "@m/ModalsMolecules/RemoveModal";
import EditFolderModal from "@m/ModalsMolecules/EditFolderModal";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function FolderBox({ folderName, folderProgressValue, folderID, index }: any) {
  const { t } = useTranslation();
  const [, setModalDetails] = useRecoilState(modalDetails);

  return (
    <div
      className={`flex flex-col gap-4 p-4 justify-center items-center badge-neutral rounded-lg ring ${
        index % 2 === 0 ? "ring-secondary" : "ring-primary"
      } ring-offset-2 ring-offset-base-100 drop-shadow-lg`}
    >
      <progress
        className={`progress ${
          index % 2 === 0 ? "progress-secondary" : "progress-primary"
        } max-w-56`}
        value={folderProgressValue}
        max="100"
      ></progress>
      <p>{folderName}</p>
      <Button
        style={`${
          index % 2 === 0 ? "btn-secondary" : "btn-primary"
        } grow w-full`}
        text={t("seeFolderTodosBtn")}
        isOutlineBtn
        linkTo={folderID}
        isLink
      />
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <Button
          type="button"
          onClickHandler={() => {
            setModalDetails({
              elements: <EditFolderModal />,
              isShown: true,
            });
          }}
          style="btn-info grow basis-full lg:basis-1/3"
          text={t("editFolderTitle")}
          isOutlineBtn
        />
        <Button
          type="button"
          style="btn-error grow basis-full lg:basis-1/3"
          text={t("removeFolderBtn")}
          onClickHandler={() => {
            setModalDetails({ elements: <RemoveModal />, isShown: true });
          }}
          isOutlineBtn
        />
      </div>
    </div>
  );
}

export default memo(FolderBox);
