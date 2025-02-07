import { headerTitlePropsType } from "@type/atomsTypes";
import { memo } from "react";

function HeaderTitle({ title, textColor }: headerTitlePropsType) {
  return (
    <p className={`text-xl md:text-2xl ${textColor} font-bold drop-shadow-lg`}>{title}</p>
  );
}

export default memo(HeaderTitle);
