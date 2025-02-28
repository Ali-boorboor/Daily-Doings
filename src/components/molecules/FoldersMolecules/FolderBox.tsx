import Button from "@a/Button";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function FolderBox({ folderName, folderProgressValue, folderID, index, handleClick }: any) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col gap-4 p-4 justify-center items-center badge-neutral rounded-lg ring cursor-pointer ${
        index % 2 === 0 ? "ring-secondary" : "ring-primary"
      } ring-offset-2 ring-offset-base-100 drop-shadow-lg`}
      onClick={handleClick}
    >
      <progress
        className={`progress ${index % 2 === 0 ? "progress-secondary" : "progress-primary"} w-56`}
        value={folderProgressValue}
        max="100"
      ></progress>
      <p>{folderName}</p>
      <Button
        style={`${index % 2 === 0 ? "btn-secondary" : "btn-primary"} grow w-full`}
        text={t("seeFolderTodosBtn")}
        isOutlineBtn
        linkTo={folderID}
        isLink
      />
    </div>
  );
}

export default memo(FolderBox);
