import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import AddFolderModalForm from "@o/FoldersOrganisms/AddFolderModalForm";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function FolderHeader({ onSubmitHandler }: any) {
  const [, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between badge-primary p-2 rounded-lg drop-shadow-lg">
      <HeaderTitle
        style="text-primary-content text-xl md:text-2xl"
        title={t("foldersLink")}
      />
      <Button
        type="button"
        text={t("addFolderBtn")}
        style="btn-accent drop-shadow-lg"
        onClickHandler={() => {
          setModalDetails({
            elements: <AddFolderModalForm onSubmitHandler={onSubmitHandler} />,
            isShown: true,
          });
        }}
      />
    </div>
  );
}

export default memo(FolderHeader);
