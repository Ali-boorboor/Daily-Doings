import Pagination from "@m/Pagination";
import HeaderTitle from "@a/HeaderTitle";
import AddStickyWall from "@a/AddStickyWall";
import TodoStickyWall from "@m/TodoStickyWall";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function TodosStickyWalls() {
  const { t } = useTranslation();

  return (
    <div
      dir="ltr"
      className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
    >
      <HeaderTitle
        style="bg-primary text-primary-content text-xl md:text-2xl p-2 text-center rounded-b-full"
        title={t("stickyWallTitle")}
      />
      <div className="flex flex-wrap gap-4 lg:gap-10 justify-center items-center p-4 lg:p-8">
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 1"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 2"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 3"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 4"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 5"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 6"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 7"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 8"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-accent text-accent-content"
          subject="Test 9"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-info text-info-content"
          subject="Test 10"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-warning text-warning-content"
          subject="Test 11"
          listItems={["test text todo list", "test text todo list"]}
          isList
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 12"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-secondary text-secondary-content"
          subject="Test 13"
          description="Test Text To See Todo"
        />
        <TodoStickyWall
          style="bg-primary text-primary-content"
          subject="Test 14"
          description="Test Text To See Todo"
        />
        <AddStickyWall />
      </div>
      <Pagination />
    </div>
  );
}

export default memo(TodosStickyWalls);
