import HeaderTitle from "@a/HeaderTitle";
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

function BarChart() {
  const { t } = useTranslation();

  const data = [
    { name: "Folder A", doneTodos: 2400 },
    { name: "Folder B", doneTodos: 1398 },
    { name: "Folder C", doneTodos: 9800 },
    { name: "Folder D", doneTodos: 3908 },
  ];

  return (
    <div className="p-4 badge-ghost flex-grow basis-1/2 rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <HeaderTitle
        style="text-xl font-bold mb-1 text-center"
        title={t("dashboardActivityOverview")}
      />
      <ResponsiveContainer width="100%" height={300}>
        <Chart width={730} height={250} data={data}>
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
