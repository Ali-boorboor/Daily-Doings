import Divider from "@a/Divider";
import SearchInput from "@m/SearchInput";
import SidebarLinks from "@m/SidebarLinks";
import ThemePalette from "@m/ThemePalette";
import { IoCalendarNumber, IoSettingsSharp } from "react-icons/io5";
import { isSideBarCollapse } from "@st/globalStates";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { PiListChecks } from "react-icons/pi";
import { AiFillFolder } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { memo } from "react";

function MainSidebar() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);

  return (
    <aside
      className={`fixed top-16 h-screen drop-shadow-lg transition-all duration-300 ease-sidebar overflow-hidden w-40 md:w-60 lg:w-72 xl:w-80 border-r-primary border-r ${
        isSideBarOpen
          ? "translate-x-0 opacity-100 visible"
          : "-translate-x-full opacity-0 invisible"
      }`}
    >
      <nav className="flex flex-col gap-2 md:gap-4 bg-base-200 text-base-content h-full w-full p-2 md:px-4 md:py-8">
        <SearchInput style="" />
        <Divider style="m-0 md:m-1" />
        <SidebarLinks
          href="/dashboard"
          title="Dashboard"
          icon={<MdSpaceDashboard className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title="Calendar"
          icon={<IoCalendarNumber className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title="Sticky Wall"
          icon={<FaNoteSticky className="w-6 h-6" />}
        />
        <Divider style="m-0 md:m-1" />
        <SidebarLinks
          href="/"
          title="Table"
          icon={<BsTable className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title="Today"
          icon={<PiListChecks className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title="Form"
          icon={<FaClipboardList className="w-6 h-6" />}
        />
        <SidebarLinks
          href="/"
          title="Folders"
          icon={<AiFillFolder className="w-6 h-6" />}
        />
        <Divider style="m-0 md:m-1" />
        <ThemePalette style="hidden md:flex" />
        <SidebarLinks
          href="/"
          title="Settings"
          icon={<IoSettingsSharp className="w-6 h-6" />}
        />
      </nav>
    </aside>
  );
}

export default memo(MainSidebar);
