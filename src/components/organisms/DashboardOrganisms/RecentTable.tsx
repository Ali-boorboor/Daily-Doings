import Alert from "@a/Alert";
import Badge from "@a/Badge";
import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import TableWrapper from "@m/TableWrapper";
import { RecentTableTodos } from "@type/organismsTypes";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function RecentTable() {
  const { t } = useTranslation();
  const { data } = useGetReq({
    queryKey: "RECENT-TODOS",
    url: "/todo/get-recent",
  });

  if (data?.status !== 204) {
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
            {data?.data?.todos?.map((todo: RecentTableTodos, index: number) => (
              <tr className="border border-base-content drop-shadow-lg">
                <th>{++index}</th>
                <td className="border border-base-content drop-shadow-lg">
                  {todo?.subject}
                </td>
                <td className="border border-base-content drop-shadow-lg">
                  {todo?.status?.status === "Done" ? (
                    <Badge text={t("doneStatus")} badgeStatus="badge-success" />
                  ) : todo?.status?.status === "Not Done" ? (
                    <Badge
                      text={t("notDoneStatus")}
                      badgeStatus="badge-error"
                    />
                  ) : todo?.status?.status === "Await" ? (
                    <Badge
                      text={t("awaitStatus")}
                      badgeStatus="badge-warning"
                    />
                  ) : (
                    <Badge
                      text={t("inProgressStatus")}
                      badgeStatus="badge-info"
                    />
                  )}
                </td>
                <td className="border border-base-content drop-shadow-lg">
                  {todo?.folder?.name || (
                    <Alert
                      text={t("noDataAlertText")}
                      alertStatus="alert-warning"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        }
      />
    );
  } else {
    return <NoDataAlert />;
  }
}

export default memo(RecentTable);
