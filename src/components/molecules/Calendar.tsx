import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { memo } from "react";

const Calendar = () => {
  // const { t } = useTranslation();

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: "Event 1",
            start: "2025-02-09T10:00:00",
            end: "2025-02-09T12:00:00",
            allDay: true,
          },
          {
            title: "Event 2",
            start: "2025-02-10T14:00:00",
            end: "2025-02-10T16:00:00",
            allDay: true,
          },
          {
            title: "Event 2",
            start: "2025-02-10T14:00:00",
            end: "2025-02-10T16:00:00",
            allDay: true,
          },
          {
            title: "Event 2",
            start: "2025-02-10T14:00:00",
            end: "2025-02-10T16:00:00",
            allDay: true,
          },
          {
            title: "Event 2",
            start: "2025-02-10T14:00:00",
            end: "2025-02-10T16:00:00",
            allDay: true,
          },
          {
            title: "Event 2",
            start: "2025-02-10T14:00:00",
            end: "2025-02-10T16:00:00",
            allDay: true,
          },
        ]}
        // headerToolbar={{
        //   left: `${t('prev')},${t('next')} ${t('today')}`, // Use i18next for custom button names
        //   center: "title",
        //   right: "dayGridMonth,dayGridWeek,dayGridDay",
        // }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek",
        }}
        // locale="fa"
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
