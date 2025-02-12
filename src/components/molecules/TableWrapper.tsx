import { tableWrapperPropsType } from "@type/moleculesTypes";
import { memo } from "react";

function TableWrapper({
  tbody,
  thead,
  headerTitle,
  pagination,
  headerLink,
}: tableWrapperPropsType) {
  return (
    <div className="overflow-x-auto badge-ghost w-full p-4 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center sticky left-0 right-0 flex gap-4 justify-between items-center">
        {headerTitle}
        {headerLink}
      </h3>
      <table className="table table-lg text-center">
        {thead}
        {tbody}
      </table>
      <div className="sticky left-0 right-0">{pagination}</div>
    </div>
  );
}

export default memo(TableWrapper);
