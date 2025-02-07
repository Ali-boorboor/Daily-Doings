import OverviewProgress from "@m/DashboardMolecules/OverviewProgress";
import HeaderTitle from "@a/HeaderTitle";
import Button from "@a/Button";
import { memo } from "react";

function Overview() {
  return (
    <div className="w-full p-4 h-40 bg-primary rounded-lg max-w-screen-2xl relative">
      <div className="flex items-center justify-between">
        <HeaderTitle textColor="text-primary-content" title="Todos Status" />
        <Button
          text="Add Todo"
          style="btn-accent drop-shadow-lg"
          linkTo="/"
          isLink
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-around p-4 absolute top-1/2 left-0 right-0">
        <OverviewProgress
          value={20}
          style="ring-success text-success"
          text="20%"
          title="Done Todos"
          count={2}
          totalCount={10}
        />
        <OverviewProgress
          value={40}
          style="ring-error text-error"
          text="40%"
          title="Not Done Todos"
          count={4}
          totalCount={10}
        />
        <OverviewProgress
          value={30}
          style="ring-info text-info"
          text="30%"
          title="In Progress Todos"
          count={3}
          totalCount={10}
        />
        <OverviewProgress
          value={10}
          style="ring-warning text-warning"
          text="10%"
          title="Await Todos"
          count={1}
          totalCount={10}
        />
      </div>
    </div>
  );
}

export default memo(Overview);
