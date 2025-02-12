import Button from "@a/Button";
import Divider from "@a/Divider";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function NavigateBtns() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        style="btn-primary grow"
        text={t("settingsChangePasswordBtn")}
        isOutlineBtn
        linkTo="/"
        isLink
      />
      <Divider text={t("authPagesDividerText")} style="divider-horizontal" />
      <Button
        style="btn-secondary grow"
        text={t("settingsChangeUsernameBtn")}
        isOutlineBtn
        linkTo="/"
        isLink
      />
    </div>
  );
}

export default memo(NavigateBtns);
