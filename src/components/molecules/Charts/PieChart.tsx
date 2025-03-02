import HeaderTitle from "@a/HeaderTitle";
import { PieChartPropsType } from "@type/moleculesTypes";
import {
  Cell,
  Pie,
  PieChart as Chart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function PieChart({ data }: PieChartPropsType) {
  const { t } = useTranslation();
  const COLORS = ["#34d399", "#f87171", "#38bdf8", "#fbbf24"];

  const datas = [
    { name: `${t("doneTodos")} %`, value: data?.doneTodos?.doneTodosPercent },
    {
      name: `${t("notDoneTodos")} %`,
      value: data?.notDoneTodos?.notDoneTodosPercent,
    },
    {
      name: `${t("inProgressTodos")} %`,
      value: data?.inProgressTodos?.inProgressTodosPercent,
    },
    {
      name: `${t("awaitTodos")} %`,
      value: data?.awaitTodos?.awaitTodosPercent,
    },
  ];

  return (
    <div className="p-4 badge-ghost flex-grow basis-1/2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <HeaderTitle
        style="text-xl font-bold mb-1 text-center"
        title={t("dashboardTodosOverview")}
      />
      <ResponsiveContainer width="100%" height={300}>
        <Chart>
          <Pie data={datas} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {datas.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(PieChart);
