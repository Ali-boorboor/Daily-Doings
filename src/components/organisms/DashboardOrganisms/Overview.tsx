import OverviewProgress from "@m/DashboardMolecules/OverviewProgress";
import HeaderTitle from "@a/HeaderTitle";
import Button from "@a/Button";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function Overview() {
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
          value={20}
          style="ring-success text-success"
          text="20%"
          title={t("doneTodos")}
          count={2}
          totalCount={10}
        />
        <OverviewProgress
          value={40}
          style="ring-error text-error"
          text="40%"
          title={t("notDoneTodos")}
          count={4}
          totalCount={10}
        />
        <OverviewProgress
          value={30}
          style="ring-info text-info"
          text="30%"
          title={t("inProgressTodos")}
          count={3}
          totalCount={10}
        />
        <OverviewProgress
          value={10}
          style="ring-warning text-warning"
          text="10%"
          title={t("awaitTodos")}
          count={1}
          totalCount={10}
        />
      </div>
    </div>
  );
}

export default memo(Overview);
