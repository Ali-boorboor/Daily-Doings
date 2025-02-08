import { circleProgressPropsType } from "@type/atomsTypes";
import { memo } from "react";

function CircleProgress({ text, style, size, value }: circleProgressPropsType) {
  return (
    <div
      className={`radial-progress ${style} badge-ghost ring ring-offset-2 ring-offset-base-100`}
      style={{ "--value": value, "--size": size } as Record<number, number>}
      role="progressbar"
    >
      {text}
    </div>
  );
}

export default memo(CircleProgress);
