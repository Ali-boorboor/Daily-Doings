import i18next from "i18next";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarProps } from "@type/organismsTypes";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";

const Calendar = ({ data }: CalendarProps) => {
  const { language } = i18next;
  const { i18n, t } = useTranslation();
  const [buttonText, setButtonText] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      document
        .querySelectorAll(
          ".fc-prev-button, .fc-next-button, .fc-today-button, .fc-dayGridMonth-button, .fc-dayGridWeek-button"
        )
        .forEach((btn) => {
          btn.removeAttribute("title");
        });

      clearTimeout(timeout);
    }, 100);

    setButtonText({
      today: t("todayBtnCalendar"),
      month: t("monthBtnCalendar"),
      week: t("weekBtnCalendar"),
      prev: t("prevBtnCalendar"),
      next: t("nextBtnCalendar"),
    });
  }, [i18n.language]);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek",
        }}
        buttonText={buttonText}
        locale={language === "fa" ? "fa" : "en"}
        eventClassNames={["bg-primary"]}
        eventContent={(arg) => {
          return (
            <div className="text-primary-content w-full h-full hover:bg-primary p-1 text-center font-bold text-base lg:text-lg">
              {arg.event.title}
            </div>
          );
        }}
      />
    </div>
  );
};

export default memo(Calendar);
