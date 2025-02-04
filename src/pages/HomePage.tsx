import MainHeader from "@o/MainHeader";
import MainSidebar from "@o/MainSidebar";
import { isSideBarCollapse } from "@st/globalStates";
import { useRecoilValue } from "recoil";
import { memo } from "react";

import StickyWall from "@/components/molecules/StickyWall";
import AddStickyWall from "@/components/atoms/AddStickyWall";

function HomePage() {
  const isSideBarOpen = useRecoilValue(isSideBarCollapse);

  return (
    <main className="flex flex-col">
      <MainHeader />
      <div className="">
        <MainSidebar />
        <div
          className={`p-4 transition-all duration-300 ease-sidebar overflow-hidden ${
            isSideBarOpen && "ml-0 md:ml-60 lg:ml-72 xl:ml-80"
          }`}
        >
          {/* <StickyWall
            subject="test todo"
            description="test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component test todo text to see the component"
            isList={true}
            bgTextColors="bg-primary text-primary-content"
            listItems={[
              { title: "test text to see todo 1" },
              { title: "test text to see todo 2" },
              { title: "test text to see todo 3" },
              { title: "test text to see todo 4" },
              { title: "test text to see todo 5" },
              { title: "test text to see todo 6" },
            ]}
          />
          <AddStickyWall /> */}
        </div>
      </div>
    </main>
  );
}

export default memo(HomePage);
