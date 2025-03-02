import { memo } from "react";

function Loading() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center z-50 fixed inset-0 bg-base-100">
      <span className="loading loading-spinner text-primary w-14 h-14"></span>
    </div>
  );
}

export default memo(Loading);
