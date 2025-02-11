import HeaderTitle from "@a/HeaderTitle";
import docTitle from "@/utils/documentTitle";
import AddTodayTodo from "@m/TodayMolecules/AddTodayTodo";
import TodayTodosForm from "@o/TodayOrganisms/TodayTodosForm";
import TodayTodoPriority from "@m/TodayMolecules/TodayTodoPriority";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

function Today() {
  const { t } = useTranslation();

  useEffect(() => {
    docTitle("Today Page");
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
        <HeaderTitle
          title={t("todayTodosTitle")}
          style="bg-primary text-primary-content text-xl md:text-2xl text-center p-2 rounded-b-full"
        />
        <AddTodayTodo />
        <TodayTodoPriority />
        <TodayTodosForm />
      </div>
    </div>
  );
}

export default memo(Today);
