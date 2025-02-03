import Divider from "@a/Divider";
import { IoCalendarNumber, IoSettingsSharp } from "react-icons/io5";
import { isSideBarCollapse } from "@st/globalStates";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { PiListChecks } from "react-icons/pi";
import { AiFillFolder } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { NavLink } from "react-router";
import { memo } from "react";

function MainSidebar() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);

  const activeLinkStyle = ({ isActive }: any) =>
    `btn font-roboto-bold flex justify-start items-center gap-4 ${
      isActive ? "btn-primary" : "btn-ghost btn-outline"
    }`;

  return (
    <aside
      className={`fixed top-16 h-screen drop-shadow-lg transition-all duration-300 ease-sidebar overflow-hidden w-80 border-r-primary border-r ${
        isSideBarOpen
          ? "translate-x-0 opacity-100 visible"
          : "-translate-x-full opacity-0 invisible"
      }`}
    >
      <nav className="flex flex-col gap-4 bg-base-200 text-base-content h-full w-full px-4 py-8">
        <NavLink to="/dashboard" className={activeLinkStyle}>
          <MdSpaceDashboard className="w-6 h-6" />
          Dashboard
        </NavLink>
        <NavLink to="/" className={activeLinkStyle}>
          <IoCalendarNumber className="w-6 h-6" />
          Calendar
        </NavLink>
        <NavLink to="/" className={activeLinkStyle}>
          <FaNoteSticky className="w-6 h-6" />
          Sticky Wall
        </NavLink>
        <NavLink to="/" className={activeLinkStyle}>
          <BsTable className="w-6 h-6" />
          Table
        </NavLink>
        <Divider style="m-1" />
        <NavLink to="/" className={activeLinkStyle}>
          <PiListChecks className="w-6 h-6" />
          Today
        </NavLink>
        <NavLink to="/" className={activeLinkStyle}>
          <FaClipboardList className="w-6 h-6" />
          Form
        </NavLink>
        <NavLink to="/" className={activeLinkStyle}>
          <AiFillFolder className="w-6 h-6" />
          Folders
        </NavLink>
        <Divider style="m-1" />
        <NavLink to="/" className={activeLinkStyle}>
          <IoSettingsSharp className="w-6 h-6" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default memo(MainSidebar);
