import { RiAddCircleLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { memo } from "react";

function AddStickyWall() {
  const { t } = useTranslation();

  return (
    <Link
      to="/form"
      className="tooltip w-40 h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-lg py-3 px-2 btn btn-outline btn-ghost flex justify-center items-center cursor-pointer"
      data-tip={t("addStickyWall")}
    >
      <RiAddCircleLine className="w-10 h-10" />
    </Link>
  );
}

export default memo(AddStickyWall);
