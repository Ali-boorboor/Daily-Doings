import Pagination from "@m/Pagination";
import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import FolderBoxs from "@o/FoldersOrganisms/FolderBoxs";
import FolderHeader from "@o/FoldersOrganisms/FolderHeader";
import { useTranslation } from "react-i18next";
import { page } from "@st/globalStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Folder() {
  const [pageCount, setPageCount] = useRecoilState(page);
  const { t } = useTranslation();
  const { data }: any = useGetReq({
    queryKey: ["ALL-FOLDERS", `PAGE=${pageCount}`],
    url: `/folder?limit=20&page=${pageCount}`,
    cacheTime: 86400000,
    staleTime: 86400000,
  });
  const { mutate: postReq } = usePostReq({
    successTitle: t("successAddFolderToast"),
    errorTitle: t("errorAddFolderToast"),
    refetchQueryKey: "ALL-FOLDERS",
    url: "/folder",
  });

  useEffect(() => {
    docTitle("Folders Page");

    return () => setPageCount(1);
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <FolderHeader onSubmitHandler={postReq} />
      <div className="p-2">
        {data?.status !== 204 ? <FolderBoxs data={data} /> : <NoDataAlert />}
      </div>
      {data?.status !== 204 && <Pagination data={data?.data} />}
    </div>
  );
}

export default memo(Folder);
