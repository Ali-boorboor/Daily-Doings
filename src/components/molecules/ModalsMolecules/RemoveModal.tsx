import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import { modalDetails } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function RemoveModal({ btnText, btnIcon }: any) {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);

  return (
    <Button
      onClickHandler={() => {
        setModalDetails({
          elements: (
            <div className="flex flex-col gap-4 items-center justify-center">
              <HeaderTitle
                title="Are You Sure ?"
                style="badge-primary rounded-lg text-xl md:text-2xl w-full text-center p-2 ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
              />
              <div className="flex justify-center items-center gap-4 w-full">
                <Button
                  type="button"
                  style="btn-success w-1/3 grow ring ring-success ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                  text={"Yes"}
                  onClickHandler={() => {
                    setModalDetails({ ...ModalDetails, isShown: false });
                  }}
                />
                <Button
                  type="button"
                  style="btn-error w-1/3 grow ring ring-error ring-offset-2 ring-offset-base-100 drop-shadow-lg"
                  text={"No"}
                  onClickHandler={() => {
                    setModalDetails({ ...ModalDetails, isShown: false });
                  }}
                />
              </div>
            </div>
          ),
          isShown: true,
        });
      }}
      style={`btn-error border ${
        btnIcon && "w-8 min-h-4 h-8 btn-circle drop-shadow-lg"
      }`}
      type="button"
      text={btnIcon || btnText}
    />
  );
}

export default memo(RemoveModal);
