import { toastDetails } from "@st/globalStates";
import { useRecoilValue } from "recoil";
import { memo } from "react";

function Toast() {
  const ToastDetails = useRecoilValue(toastDetails);

  return (
    <div
      className={`toast toast-top toast-center z-50 transition-all duration-300 ease-sidebar ${
        ToastDetails.isShown
          ? "visible pointer-events-auto opacity-100 translate-y-0"
          : "invisible pointer-events-none opacity-0 -translate-y-full"
      }`}
    >
      <div
        className={`alert ${ToastDetails.toastState} ring ring-inherit ring-offset-2 ring-offset-base-100 drop-shadow-lg`}
      >
        <span>{ToastDetails.title}</span>
      </div>
    </div>
  );
}

export default memo(Toast);
