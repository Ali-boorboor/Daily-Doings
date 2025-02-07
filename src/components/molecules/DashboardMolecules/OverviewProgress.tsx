import CircleProgress from "@a/CircleProgress";
import { overviewProgressPropsType } from "@type/moleculesTypes";
import { memo } from "react";

function OverviewProgress({
  style,
  title,
  count,
  totalCount,
  value,
  text,
}: overviewProgressPropsType) {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-4 max-w-64 w-full bg-neutral ${style} p-4 rounded-lg ring ring-offset-2 ring-offset-base-100 drop-shadow-lg`}
    >
      <div className="flex flex-col text-center">
        <p>{title}</p>
        <p>{`${count} / ${totalCount}`}</p>
      </div>
      <CircleProgress text={text} value={value} style={style} />
    </div>
  );
}

export default memo(OverviewProgress);
