import i18next from "i18next";
import Button from "@a/Button";
import Divider from "@a/Divider";
import MainLogo from "@a/MainLogo";
import SearchInput from "@m/SearchInput";
import LangTogleBtn from "@m/LangTogleBtn";
import usePostReq from "@/hooks/usePostReq";
import { userDetails, isSideBarCollapse } from "@st/globalStates";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { memo } from "react";

function MainHeader() {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarCollapse);
  const userInfo = useRecoilValue(userDetails);
  const { t } = useTranslation();
  const { language } = i18next;
  const { mutate: postReq } = usePostReq({
    successTitle: t("successLogoutToast"),
    errorTitle: t("errorLogoutToast"),
    navigateTo: "/auth/login",
    url: "/logout",
  });

  return (
    <div className="navbar z-50 fixed top-0 px-4 lg:px-6 bg-base-100 drop-shadow-lg border-b-primary border-b">
      <div
        className="flex-none tooltip tooltip-bottom"
        data-tip={
          isSideBarOpen ? t("sideBarCloseTitleBtn") : t("sideBarOpenTitleBtn")
        }
      >
        <button
          className="btn btn-circle btn-outline btn-ghost"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          {isSideBarOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <LuMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="flex-1 mx-4">
        <MainLogo style="w-12 h-12" />
      </div>
      <div className="flex-none gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-4">
          <LangTogleBtn />
          <SearchInput style="w-40 lg:w-60 xl:w-80" />
        </div>
        <div
          className={`tooltip ${
            language === "en" ? "tooltip-left" : "tooltip-right"
          }`}
          data-tip={t("profileTitle")}
        >
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar online">
              <div className="ring-accent ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img crossOrigin="anonymous" src={userInfo?.cover} />
              </div>
            </div>
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ring-accent ring-offset-2 ring-offset-base-100 ring"
            >
              <p className="text-lg font-bold">{userInfo?.username}</p>
              <Divider style="m-1" />
              <Button
                style="btn-ghost"
                text={t("settingsLink")}
                isOutlineBtn
                linkTo="/settings"
                isLink
              />
              <Divider style="m-1" />
              <Button
                onClickHandler={() => postReq({})}
                style="btn-error"
                type="button"
                text={t("profileLogoutBtn")}
                isOutlineBtn
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainHeader);
