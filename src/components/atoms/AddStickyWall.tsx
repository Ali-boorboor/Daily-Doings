import { RiAddCircleLine } from "react-icons/ri";
import { memo } from "react";

function AddStickyWall() {
  return (
    <div className="w-40 h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-lg py-3 px-2 btn btn-outline btn-ghost flex justify-center items-center cursor-pointer">
      <RiAddCircleLine className="w-10 h-10" />
    </div>
  );
}

export default memo(AddStickyWall);
