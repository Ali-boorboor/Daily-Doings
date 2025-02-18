import { modalDetails } from "@st/globalStates";
import { useRecoilValue } from "recoil";
import { memo } from "react";

function Modal() {
  const ModalDetails = useRecoilValue(modalDetails);

  return (
    <>
      <dialog className={`modal ${ModalDetails.isShown && "modal-open"}`}>
        <div className="modal-box flex flex-col gap-8 ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
          {ModalDetails.elements}
        </div>
      </dialog>
    </>
  );
}

export default memo(Modal);
