import Pagination from "@m/Pagination";
import HeaderTitle from "@a/HeaderTitle";
import AddStickyWall from "@a/AddStickyWall";
import TodoStickyWall from "@m/TodoStickyWall";
import { getAllTodosResType } from "@type/organismsTypes";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function TodosStickyWalls({ data }: getAllTodosResType) {
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
        {data?.todos?.map((todo, index) => {
          return (
            <TodoStickyWall
              key={++index}
              todoID={todo?._id}
              style={todo?.labelColor}
              subject={todo?.subject}
              description={todo?.description}
              listItems={todo?.isListTodo === 1 ? todo?.listItems : []}
              isList={todo?.isListTodo === 0 ? false : true}
            />
          );
        })}
        <AddStickyWall />
      </div>
      <Pagination />
    </div>
  );
}

export default memo(TodosStickyWalls);
