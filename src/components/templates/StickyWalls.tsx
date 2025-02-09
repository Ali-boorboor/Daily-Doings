import AddStickyWall from "@a/AddStickyWall";
import HeaderTitle from "@a/HeaderTitle";
import StickyWall from "@m/StickyWall";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function StickyWalls() {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <HeaderTitle
        style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full"
        title={t("stickyWallTitle")}
      />
      <div className="grid gap-4 lg:gap-10 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] justify-items-center p-4 lg:p-8">
        <StickyWall
          style="bg-primary text-primary-content"
          subject="Test 1"
          description="Test Text To See Todo"
        />
        <StickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 2"
          description="Test Text To See Todo"
        />
        <StickyWall
          style="bg-primary text-primary-content"
          subject="Test 3"
          description="Test Text To See Todo"
        />
        <StickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 4"
          description="Test Text To See Todo"
        />
        <StickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 5"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-primary text-primary-content"
          subject="Test 6"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 7"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-primary text-primary-content"
          subject="Test 8"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-accent text-accent-content"
          subject="Test 9"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-info text-info-content"
          subject="Test 10"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <StickyWall
          style="bg-warning text-warning-content"
          subject="Test 11"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <AddStickyWall />
      </div>
    </div>
  );
}

export default memo(StickyWalls);
