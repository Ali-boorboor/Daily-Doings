import { authPageHeadingPropsType } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function AuthPageHeading({ text, name }: authPageHeadingPropsType) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
        {`${t("loginWelcomeText")} ${name || ""}`}
      </h1>
      <h2 className="text-lg sm:text-xl">{text}</h2>
    </>
  );
}

export default memo(AuthPageHeading);
