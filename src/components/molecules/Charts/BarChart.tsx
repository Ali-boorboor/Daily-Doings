import HeaderTitle from "@a/HeaderTitle";
import { BarChartPropsType } from "@type/moleculesTypes";
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart as Chart,
} from "recharts";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function BarChart({ foldersOverview }: BarChartPropsType) {
  const { t } = useTranslation();

  return (
    <div
      dir="ltr"
      className="p-4 badge-ghost flex-grow basis-1/2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg"
    >
      <HeaderTitle
        style="text-xl font-bold mb-1 text-center"
        title={t("dashboardActivityOverview")}
      />
      <ResponsiveContainer width="100%" height={300}>
        <Chart width={730} height={250} data={foldersOverview}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="doneTodos" name={t("doneTodos")} fill="#34d399" />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(BarChart);
