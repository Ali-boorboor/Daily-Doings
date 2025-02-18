import { modalDetails } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function Modal() {
  const [ModalDetails, setModalDetails] = useRecoilState(modalDetails);

  return (
    <>
      <dialog className={`modal ${ModalDetails.isShown && "modal-open"}`}>
        <div className="modal-box flex flex-col gap-8">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2"
              onClick={() => {
                setModalDetails({ ...ModalDetails, isShown: false });
              }}
            >
              ✕
            </button>
          </form>
          {ModalDetails.elements}
        </div>
      </dialog>
    </>
  );
}

export default memo(Modal);
