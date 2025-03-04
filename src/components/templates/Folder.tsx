import NoDataAlert from "@m/NoDataAlert";
import useGetReq from "@/hooks/useGetReq";
import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import FolderBoxs from "@o/FoldersOrganisms/FolderBoxs";
import FolderHeader from "@o/FoldersOrganisms/FolderHeader";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

function Folder() {
  const { t } = useTranslation();
  const { data } = useGetReq({
    queryKey: "ALL-FOLDERS",
    url: "/folder",
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
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto badge-ghost rounded-lg ring ring-primary ring-offset-2 ring-offset-base-100 drop-shadow-lg">
      <FolderHeader onSubmitHandler={postReq} />
      <div className="p-2">
        {data?.status !== 204 ? (
          <FolderBoxs data={data?.data} />
        ) : (
          <NoDataAlert />
        )}
      </div>
    </div>
  );
}

export default memo(Folder);
