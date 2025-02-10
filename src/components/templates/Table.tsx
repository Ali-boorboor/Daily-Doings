import docTitle from "@/utils/documentTitle";
import TodosTable from "@o/TableOrganisms/TodosTable";
import { memo, useEffect } from "react";

function Table() {
  useEffect(() => {
    docTitle("Table Page");
  }, []);

  return <TodosTable />;
}

export default memo(Table);
