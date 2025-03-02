import { alertPropsType } from "@type/atomsTypes";
import { memo } from "react";

function Alert({ text, alertStatus }: alertPropsType) {
  return (
    <div role="alert" className={`alert block text-center ${alertStatus || "alert-info"}`}>
      <span>{text}</span>
    </div>
  );
}

export default memo(Alert);
