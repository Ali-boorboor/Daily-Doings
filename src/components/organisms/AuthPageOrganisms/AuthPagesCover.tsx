import MainLogo from "@a/MainLogo";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memo } from "react";

function AuthPagesCover() {
  const [srcIndex, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden hidden md:block basis-1/2 h-full">
      <img
        alt="form-cover"
        src="/images/login-page-cover.jpg"
        className={`w-full absolute h-full object-cover transition-all duration-500 ease-linear ${
          srcIndex === 1 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <img
        alt="form-cover"
        src="/images/signup-page-cover.jpg"
        className={`w-full absolute h-full object-cover transition-all duration-500 ease-linear ${
          srcIndex === 2 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <img
        alt="form-cover"
        src="/images/forgot-pass-page-cover.jpg"
        className={`w-full absolute h-full object-cover transition-all duration-500 ease-linear ${
          srcIndex === 3 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div className="absolute w-full flex items-center justify-between py-6 px-8">
        <MainLogo style="inline-block w-20 h-20" linkTo="/auth/login" />
        <p className="text-white text-lg sm:text-xl md:text-2xl hidden md:inline-block">
          {t("dailyDoingsText")}
        </p>
      </div>
      <p className="absolute bottom-20 text-center w-full text-2xl sm:text-3xl md:text-4xl text-white">
        {pathname === "/"
          ? t("navToLogin")
          : pathname === "/signup"
          ? t("navToSignup")
          : t("navToForgotPass")}
      </p>
      <div className="absolute bottom-6 flex gap-6 justify-center items-center w-full">
        <span
          className={`h-2 bg-white inline-block rounded-md cursor-pointer transition-all duration-500 ease-linear ${
            srcIndex === 1
              ? "bg-opacity-100 w-10 md:w-16"
              : "bg-opacity-25 w-8 md:w-14"
          }`}
          onClick={() => setSrcIndex(1)}
        ></span>
        <span
          className={`h-2 bg-white inline-block rounded-md cursor-pointer transition-all duration-500 ease-linear ${
            srcIndex === 2
              ? "bg-opacity-100 w-10 md:w-16"
              : "bg-opacity-25 w-8 md:w-14"
          }`}
          onClick={() => setSrcIndex(2)}
        ></span>
        <span
          className={`h-2 bg-white inline-block rounded-md cursor-pointer transition-all duration-500 ease-linear ${
            srcIndex === 3
              ? "bg-opacity-100 w-10 md:w-16"
              : "bg-opacity-25 w-8 md:w-14"
          }`}
          onClick={() => setSrcIndex(3)}
        ></span>
      </div>
    </div>
  );
}

export default memo(AuthPagesCover);
