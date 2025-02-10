import Pagination from "@m/Pagination";
import HeaderTitle from "@a/HeaderTitle";
import AddStickyWall from "@a/AddStickyWall";
import TodoStickyWall from "@m/TodoStickyWall";
import { createSwapy } from "swapy";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useRef } from "react";

function TodosStickyWalls() {
  const { t } = useTranslation();
  const swapyRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        animation: "spring",
      });
    }
    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  return (
    <div
      dir="ltr"
      className="container max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
      ref={containerRef}
    >
      <HeaderTitle
        style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full"
        title={t("stickyWallTitle")}
      />
      <div className="grid gap-4 lg:gap-10 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] justify-items-center p-4 lg:p-8">
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 1"
          dataSwapySlot="Test 1"
          dataSwapyItem="Test 1"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 2"
          dataSwapySlot="Test 2"
          dataSwapyItem="Test 2"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 3"
          dataSwapySlot="Test 3"
          dataSwapyItem="Test 3"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 4"
          dataSwapySlot="Test 4"
          dataSwapyItem="Test 4"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 5"
          dataSwapySlot="Test 5"
          dataSwapyItem="Test 5"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 6"
          dataSwapySlot="Test 6"
          dataSwapyItem="Test 6"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 7"
          dataSwapySlot="Test 7"
          dataSwapyItem="Test 7"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 8"
          dataSwapySlot="Test 8"
          dataSwapyItem="Test 8"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-accent text-accent-content"
          subject="Test 9"
          dataSwapySlot="Test 9"
          dataSwapyItem="Test 9"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-info text-info-content"
          subject="Test 10"
          dataSwapySlot="Test 10"
          dataSwapyItem="Test 10"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-warning text-warning-content"
          subject="Test 11"
          dataSwapySlot="Test 11"
          dataSwapyItem="Test 11"
          listItems={[
            { title: "test text todo list" },
            { title: "test text todo list" },
          ]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 12"
          dataSwapySlot="Test 12"
          dataSwapyItem="Test 12"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 13"
          dataSwapySlot="Test 13"
          dataSwapyItem="Test 13"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 14"
          dataSwapySlot="Test 14"
          dataSwapyItem="Test 14"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 15"
          dataSwapySlot="Test 15"
          dataSwapyItem="Test 15"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 16"
          dataSwapySlot="Test 16"
          dataSwapyItem="Test 16"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 17"
          dataSwapySlot="Test 17"
          dataSwapyItem="Test 17"
          description="Test Text To See Todo"
        />
        <AddStickyWall />
      </div>
      <Pagination />
    </div>
  );
}

export default memo(TodosStickyWalls);
