import ThemeCircle from "@a/ThemeCircle";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function TodayTodoPriorityGuide() {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-xl">{t("todayTodosPriorityTitle")}</p>
      <div className="p-4 flex flex-wrap gap-4 lg:gap-10 justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <ThemeCircle bgc1="bg-success" />
          <p>{t("todayTodosVeryLowPriority")}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ThemeCircle bgc1="bg-info" />
          <p>{t("todayTodosLowPriority")}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ThemeCircle bgc1="bg-warning" />
          <p>{t("todayTodosMediumPriority")}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ThemeCircle bgc1="bg-error" />
          <p>{t("todayTodosHighPriority")}</p>
        </div>
      </div>
    </>
  );
}

export default memo(TodayTodoPriorityGuide);
