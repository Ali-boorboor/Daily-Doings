import { headerTitlePropsType } from "@type/atomsTypes";
import { memo } from "react";

function HeaderTitle({ title, style }: headerTitlePropsType) {
  return (
    <p className={`${style} font-bold drop-shadow-lg`}>{title}</p>
  );
}

export default memo(HeaderTitle);
