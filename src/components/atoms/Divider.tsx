import { dividerPropsType } from "@type/atomsTypes";
import { memo } from "react";

function Divider({ text, style }: dividerPropsType) {
  return <div className={`divider ${style}`}>{text}</div>;
}

export default memo(Divider);
