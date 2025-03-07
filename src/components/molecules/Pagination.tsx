import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { paginationPropsType } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { page } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo } from "react";

function Pagination({ style, data }: paginationPropsType) {
  const { t } = useTranslation();
  const [pageCount, setPageCount] = useRecoilState(page);

  return (
    <div
      dir="ltr"
      className={`join w-full justify-center items-center bg-primary text-primary-content rounded-lg p-2 ${style}`}
    >
      <button
        disabled={+data?.page === 1 ? true : false}
        className="join-item btn badge-ghost rounded-lg border-2 border-info"
        onClick={() => setPageCount(pageCount - 1)}
      >
        <GrFormPrevious className="w-5 h-5" />
      </button>
      <button className="join-item btn badge-ghost border-2 border-info">
        {t("paginationText")} {data?.page}
      </button>
      <button
        disabled={+data?.page === +data?.totalPages ? true : false}
        className="join-item btn badge-ghost rounded-lg border-2 border-info"
        onClick={() => setPageCount(pageCount + 1)}
      >
        <GrFormNext className="w-5 h-5" />
      </button>
    </div>
  );
}

export default memo(Pagination);
