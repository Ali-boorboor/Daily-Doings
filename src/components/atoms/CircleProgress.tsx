import { circleProgressPropsType } from "@type/atomsTypes";
import { memo } from "react";

function CircleProgress({
  percent,
  ringColor,
  textColor,
}: circleProgressPropsType) {
  return (
    <div
      className={`radial-progress ${textColor} badge-ghost ring ring-offset-2 ${ringColor} ring-offset-base-100`}
      style={{ "--value": percent } as Record<number, number>}
      role="progressbar"
    >
      {`${percent}%`}
    </div>
  );
}

export default memo(CircleProgress);
