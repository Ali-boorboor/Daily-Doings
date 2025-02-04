import Button from "@a/Button";
import Divider from "@a/Divider";
import MainLogo from "@a/MainLogo";
import SearchInput from "@m/SearchInput";
import { isSideBarCollapse } from "@st/globalStates";
import { IoClose } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { LuMenu } from "react-icons/lu";
import { memo } from "react";

function MainHeader() {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarCollapse);

  return (
    <div className="navbar sticky top-0 z-50 px-4 lg:px-6 bg-base-100 drop-shadow-lg border-b-primary border-b">
      <div
        className="flex-none tooltip tooltip-bottom"
        data-tip={isSideBarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <button
          className="btn btn-circle btn-outline btn-ghost mr-4"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          {isSideBarOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <LuMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="flex-1">
        <MainLogo style="w-12 h-12 " />
      </div>
      <div className="flex-none sm:gap-4 md:gap-8">
        <SearchInput style="hidden sm:inline-flex w-40 lg:w-60 xl:w-80" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar online">
            <div className="ring-accent ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <nav
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ring-accent ring-offset-2 ring-offset-base-100 ring"
          >
            <Button
              style="btn-ghost"
              text="Settings"
              isOutlineBtn
              linkTo="/"
              isLink
            />
            <Divider style="m-1" />
            <Button
              onClickHandler={() => {}}
              style="btn-error"
              type="button"
              text="Logout"
              isOutlineBtn
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default memo(MainHeader);
