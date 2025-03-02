import { toastDetails } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Toast() {
  const [ToastDetails, setToastDetails] = useRecoilState(toastDetails);

  useEffect(() => {
    if (ToastDetails.isShown) {
      const timeOut = setTimeout(() => {
        setToastDetails({ ...ToastDetails, isShown: false });
        clearTimeout(timeOut);
      }, 3000);
    }
  }, [ToastDetails]);

  return (
    <div
      className={`toast toast-top toast-center z-50 transition-all duration-300 ease-sidebar ${
        ToastDetails.isShown
          ? "visible pointer-events-auto opacity-100 translate-y-0"
          : "invisible pointer-events-none opacity-0 -translate-y-full"
      }`}
    >
      <div
        className={`alert block text-center ${ToastDetails.toastState} ring ${ToastDetails.ringState} ring-offset-2 ring-offset-base-100 drop-shadow-lg`}
      >
        <span>{ToastDetails.title}</span>
      </div>
    </div>
  );
}

export default memo(Toast);
