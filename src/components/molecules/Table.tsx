import { useTranslation } from "react-i18next";
import { memo } from "react";

function Table() {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto badge-ghost w-full p-4 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center sticky left-0 right-0">
        {t("dashboardRecentTodos")}
      </h3>
      <table className="table table-lg text-center">
        <thead className="">
          <tr className="border text-base border-primary-content drop-shadow-lg bg-primary text-primary-content">
            <th className="border border-primary-content drop-shadow-lg">
              {t("dashboardTableNumber")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("dashboardTableName")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("dashboardTableStatus")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("dashboardTableFolder")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-base-content drop-shadow-lg">
            <th>1</th>
            <td className="border border-base-content drop-shadow-lg">
              Cy Ganderton
            </td>
            <td className="border border-base-content drop-shadow-lg">
              Quality Control Specialist
            </td>
            <td className="border border-base-content drop-shadow-lg">Blue</td>
          </tr>
          <tr className="border border-base-content drop-shadow-lg">
            <th>2</th>
            <td className="border border-base-content drop-shadow-lg">
              Hart Hagerty
            </td>
            <td className="border border-base-content drop-shadow-lg">
              Desktop Support Technician
            </td>
            <td className="border border-base-content drop-shadow-lg">
              Purple
            </td>
          </tr>
          <tr className="border border-base-content drop-shadow-lg">
            <th>3</th>
            <td className="border border-base-content drop-shadow-lg">
              Brice Swyre
            </td>
            <td className="border border-base-content drop-shadow-lg">
              Tax Accountant
            </td>
            <td className="border border-base-content drop-shadow-lg">Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
