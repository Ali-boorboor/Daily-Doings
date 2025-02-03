import MainHeader from "@o/MainHeader";
import MainSidebar from "@o/MainSidebar";
import { isSideBarCollapse } from "@st/globalStates";
import { useRecoilValue } from "recoil";
import { memo } from "react";

function HomePage() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);

  return (
    <main className="flex flex-col">
      <MainHeader />
      <div className="">
        <MainSidebar />
        <div
          className={`p-4 transition-all duration-300 ease-sidebar ${
            isSideBarOpen && "ml-80"
          }`}
        >
          HomePage
        </div>
      </div>
    </main>
  );
}

export default memo(HomePage);
