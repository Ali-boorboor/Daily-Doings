import CalendarChart from "@o/CalendarOrganisms/CalendarChart";
import docTitle from "@/utils/documentTitle";
import { memo, useEffect } from "react";

function Calendar() {
  useEffect(() => {
    docTitle("Calendar Page");
  }, []);

  return <CalendarChart />;
}

export default memo(Calendar);
