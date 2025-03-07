import docTitle from "@/utils/documentTitle";
import SearchResultsTable from "@o/SearchOrganisms/SearchResultsTable";
import { memo, useEffect } from "react";

function Search() {
  useEffect(() => {
    docTitle("Search Page");
  }, []);

  return <SearchResultsTable />;
}

export default memo(Search);
