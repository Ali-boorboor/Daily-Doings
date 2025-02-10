import Button from "@a/Button";
import MainLogo from "@a/MainLogo";
import LangTogleBtn from "@m/LangTogleBtn";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function Page404() {
  const { t } = useTranslation();

  return (
    <div className="bg-[url(/images/login-page-cover.jpg)] h-screen w-screen bg-cover bg-center">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-10 backdrop-blur-sm text-center p-2">
        <MainLogo style="w-20 h-20" />
        <LangTogleBtn />
        <h1 className="text-white text-4xl font-bold">
          {t("notFoundPageTitle")}
        </h1>
        <h2 className="text-white text-2xl font-bold">
          {t("notFoundPageText")}
        </h2>
        <Button
          style="btn-primary"
          text={t("notFoundPageBtn")}
          linkTo="/"
          isLink
        />
      </div>
    </div>
  );
}

export default memo(Page404);
