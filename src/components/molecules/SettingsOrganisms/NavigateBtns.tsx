import Button from "@a/Button";
import Divider from "@a/Divider";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function NavigateBtns() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <Button
        style="btn-primary grow"
        text={t("settingsChangePasswordBtn")}
        isOutlineBtn
        linkTo="change-password"
        isLink
      />
      <Divider
        text={t("authPagesDividerText")}
        style="hidden md:flex divider-horizontal"
      />
      <Button
        style="btn-secondary grow"
        text={t("settingsChangeUsernameBtn")}
        isOutlineBtn
        linkTo="change-username"
        isLink
      />
    </div>
  );
}

export default memo(NavigateBtns);
