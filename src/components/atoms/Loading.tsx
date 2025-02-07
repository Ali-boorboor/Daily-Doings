import { memo } from "react";

function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <span className="loading loading-spinner text-primary w-14 h-14"></span>
    </div>
  );
}

export default memo(Loading);
