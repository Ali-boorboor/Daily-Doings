import MainHeader from "@o/MainHeader";
import MainSidebar from "@o/MainSidebar";
import { isSideBarCollapse } from "@st/globalStates";
import { useRecoilValue } from "recoil";
import { Outlet } from "react-router";
import { memo } from "react";

function HomePage() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);

  return (
    <main className="flex flex-col">
      <MainHeader />
      <div className="pt-16">
        <MainSidebar />
        <div
          className={`p-4 transition-all duration-300 ease-sidebar overflow-hidden ${
            isSideBarOpen &&
            "mx-0 ltr:md:ml-60 ltr:lg:ml-72 ltr:xl:ml-80 rtl:md:mr-60 rtl:lg:mr-72 rtl:xl:mr-80"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default memo(HomePage);
