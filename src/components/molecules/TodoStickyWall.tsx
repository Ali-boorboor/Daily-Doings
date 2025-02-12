import Divider from "@a/Divider";
import {
  stickyWallListItemsType,
  stickyWallPropsType,
} from "@type/moleculesTypes";
import { memo } from "react";

function TodoStickyWall({
  subject,
  description,
  style,
  isList,
  listItems,
  dataSwapyItem,
  dataSwapySlot,
}: stickyWallPropsType) {
  return (
    <div data-swapy-slot={dataSwapySlot}>
      <div
        className={`w-40 cursor-move h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 overflow-hidden rounded-lg ${style} py-3 px-2 ltr:text-left rtl:text-right drop-shadow-lg slot top`}
        data-swapy-item={dataSwapyItem}
      >
        {subject && (
          <p className="font-bold text-lg lg:text-xl xl:text-2xl text-center">
            {subject}
          </p>
        )}
        <Divider style="m-1 divider-neutral" />
        {isList ? (
          <ul className="px-2 line-clamp-4 lg:line-clamp-5 xl:line-clamp-6">
            {listItems?.map((item: stickyWallListItemsType, index) => (
              <li
                className="relative before:absolute before:w-2 before:h-[0.1rem] before:bg-primary-content rtl:before:-right-2 ltr:before:-left-2 before:top-0 before:bottom-0 before:my-auto rtl:pr-2 ltr:pl-2"
                key={++index}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <span className="break-words line-clamp-4 lg:line-clamp-5 xl:line-clamp-6">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

export default memo(TodoStickyWall);
