import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { paginationPropsType } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function Pagination({ style }: paginationPropsType) {
  const { t } = useTranslation();

  return (
    <div
      dir="ltr"
      className={`join flex justify-center items-center bg-primary text-primary-content rounded-lg p-2 ${style}`}
    >
      <button className="join-item btn badge-ghost rounded-lg ring ring-info ring-offset-2 ring-offset-base-100 drop-shadow-lg z-10">
        <GrFormPrevious className="w-5 h-5" />
      </button>
      <button className="join-item btn ring ring-info ring-offset-2 ring-offset-base-100 drop-shadow-lg">
        {t("paginationText")} 1
      </button>
      <button className="join-item btn badge-ghost rounded-lg ring ring-info ring-offset-2 ring-offset-base-100 drop-shadow-lg z-10">
        <GrFormNext className="w-5 h-5" />
      </button>
    </div>
  );
}

export default memo(Pagination);
