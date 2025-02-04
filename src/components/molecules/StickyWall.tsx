import Divider from "@a/Divider";
import {
  stickyWallListItemsType,
  stickyWallPropsType,
} from "@type/moleculesTypes";
import { memo } from "react";

function StickyWall({
  subject,
  description,
  bgTextColors,
  isList,
  listItems,
}: stickyWallPropsType) {
  return (
    <div
      className={`w-40 h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 overflow-hidden rounded-lg ${bgTextColors} py-3 px-2 text-left`}
    >
      <p className="font-roboto-bold text-lg lg:text-xl xl:text-2xl text-center">
        {subject}
      </p>
      <Divider style="m-1 divider-neutral" />
      {isList ? (
        <ul className="px-2 line-clamp-4 lg:line-clamp-5 xl:line-clamp-6">
          {listItems?.map((item: stickyWallListItemsType) => (
            <li className="relative before:absolute before:w-2 before:h-[0.1rem] before:bg-primary-content before:-left-2 before:top-0 before:bottom-0 before:my-auto pl-2">
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <span className="line-clamp-4 lg:line-clamp-5 xl:line-clamp-6">
          {description}
        </span>
      )}
    </div>
  );
}

export default memo(StickyWall);
