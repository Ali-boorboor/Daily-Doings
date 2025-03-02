import Button from "@a/Button";
import HeaderTitle from "@a/HeaderTitle";
import OverviewProgress from "@m/DashboardMolecules/OverviewProgress";
import { PieChartPropsType } from "@type/moleculesTypes";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function Overview({ data }: PieChartPropsType) {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 pt-4 bg-primary rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <div className="flex items-center justify-between">
        <HeaderTitle
          style="text-primary-content text-xl md:text-2xl"
          title={t("dashboardStatusText")}
        />
        <Button
          text={t("dashboardStatusBtn")}
          style="btn-accent drop-shadow-lg"
          linkTo="/form"
          isLink
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-around p-4">
        <OverviewProgress
          value={data?.doneTodos?.doneTodosPercent}
          style="ring-success text-success"
          text={`${data?.doneTodos?.doneTodosPercent}%`}
          title={t("doneTodos")}
          count={data?.doneTodos?.doneTodosCount}
          totalCount={data?.allTodosCount}
        />
        <OverviewProgress
          value={data?.notDoneTodos?.notDoneTodosPercent}
          style="ring-error text-error"
          text={`${data?.notDoneTodos?.notDoneTodosPercent}%`}
          title={t("notDoneTodos")}
          count={data?.notDoneTodos?.notDoneTodosCount}
          totalCount={data?.allTodosCount}
        />
        <OverviewProgress
          value={data?.inProgressTodos?.inProgressTodosPercent}
          style="ring-info text-info"
          text={`${data?.inProgressTodos?.inProgressTodosPercent}%`}
          title={t("inProgressTodos")}
          count={data?.inProgressTodos?.inProgressTodosCount}
          totalCount={data?.allTodosCount}
        />
        <OverviewProgress
          value={data?.awaitTodos?.awaitTodosPercent}
          style="ring-warning text-warning"
          text={`${data?.awaitTodos?.awaitTodosPercent}%`}
          title={t("awaitTodos")}
          count={data?.awaitTodos?.awaitTodosCount}
          totalCount={data?.allTodosCount}
        />
      </div>
    </div>
  );
}

export default memo(Overview);
