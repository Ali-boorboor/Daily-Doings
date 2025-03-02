import Alert from "@a/Alert";
import { useTranslation } from "react-i18next";
import { IoWarning } from "react-icons/io5";
import { memo } from "react";

function NoDataAlert() {
  const { t } = useTranslation();

  return (
    <Alert
      text={
        <div className="flex justify-center items-center gap-2">
          <IoWarning className="w-6 h-6" />
          <p>{t("noDataAlertText")}</p>
          <IoWarning className="w-6 h-6" />
        </div>
      }
      alertStatus="alert-warning"
    />
  );
}

export default memo(NoDataAlert);
