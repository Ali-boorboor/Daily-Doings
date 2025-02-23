import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import { modalDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo } from "react";

function RemoveModal() {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <HeaderTitle
        title={t("removeModalTitle")}
        style="badge-primary rounded-lg text-xl md:text-2xl w-full text-center p-2 ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
      />
      <div className="flex justify-center items-center gap-4 w-full">
        <Button
          type="button"
          style="btn-success w-1/3 grow ring ring-success ring-offset-2 ring-offset-base-100 drop-shadow-lg"
          text={t("removeModalYesBtn")}
          onClickHandler={() => {
            setModalDetails({ ...ModalDetails, isShown: false });
          }}
        />
        <Button
          type="button"
          style="btn-error w-1/3 grow ring ring-error ring-offset-2 ring-offset-base-100 drop-shadow-lg"
          text={t("removeModalNoBtn")}
          onClickHandler={() => {
            setModalDetails({ ...ModalDetails, isShown: false });
          }}
        />
      </div>
    </div>
  );
}

export default memo(RemoveModal);
