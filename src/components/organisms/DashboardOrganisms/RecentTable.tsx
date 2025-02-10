import TableWrapper from "@m/TableWrapper";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function RecentTable() {
  const { t } = useTranslation();

  return (
    <TableWrapper
      headerTitle={t("dashboardRecentTodos")}
      thead={
        <thead>
          <tr className="border text-base border-primary-content drop-shadow-lg bg-primary text-primary-content">
            <th className="border border-primary-content drop-shadow-lg">
              {t("tablesNumberField")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("tablesNameField")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("tablesStatusField")}
            </th>
            <th className="border border-primary-content drop-shadow-lg">
              {t("tablesFolderField")}
            </th>
          </tr>
        </thead>
      }
      tbody={
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
      }
    />
  );
}

export default memo(RecentTable);
