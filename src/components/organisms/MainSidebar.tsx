import i18next from "i18next";
import Divider from "@a/Divider";
import SearchInput from "@m/SearchInput";
import SidebarLinks from "@m/SidebarLinks";
import ThemePalette from "@m/ThemePalette";
import { IoCalendarNumber, IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { PiListChecks } from "react-icons/pi";
import { AiFillFolder } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { isSideBarCollapse } from "@/stores/globalStates";

function MainSidebar() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);
  const { t } = useTranslation();
  const { language } = i18next;
  const isRTL = language !== "en";

  return (
    <div
      className={`h-screen z-10 fixed top-16 drop-shadow-lg transition-all duration-300 ease-sidebar overflow-hidden w-44 md:w-60 lg:w-72 xl:w-80
        ${
          isRTL ? "border-l-primary border-l" : "border-r-primary border-r"
        }          
        ${!isSideBarOpen ? "w-0 opacity-0 invisible" : " opacity-100 visible"}`}
    >
      <nav className="flex flex-col gap-2 md:gap-4 bg-base-200 text-base-content h-full w-full p-2 md:px-4 md:py-8">
        <SearchInput style="" />
        <Divider style="m-0 md:m-1" />
        <SidebarLinks
          href="/dashboard"
          title={t("dashboardLink")}
          icon={<MdSpaceDashboard className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title={t("calendarLink")}
          icon={<IoCalendarNumber className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title={t("stickyWallLink")}
          icon={<FaNoteSticky className="w-6 h-6" />}
        />
        <Divider style="m-0 md:m-1" />
        <SidebarLinks
          href="/"
          title={t("tableLink")}
          icon={<BsTable className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title={t("todayLink")}
          icon={<PiListChecks className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title={t("formLink")}
          icon={<FaClipboardList className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title={t("foldersLink")}
          icon={<AiFillFolder className="w-6 h-6" />}
        />
        <Divider style="m-0 md:m-1" />
        <ThemePalette style="hidden md:flex" />
        <SidebarLinks
          href="/"
          title={t("settingsLink")}
          icon={<IoSettingsSharp className="w-6 h-6" />}
        />
      </nav>
    </div>
  );
}

export default memo(MainSidebar);
