import axiosInstance from "@/services/axiosInstance";
import { hasLoading, toastDetails } from "@st/globalStates";
import { useInfiniteQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function useInfiniteGetFolderTodosReq() {
  const { folderID } = useParams();
  const { t } = useTranslation();
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setLoading] = useRecoilState(hasLoading);

  const { data, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["ALL-FOLDERS", `FOLDER-${folderID}-INFINITE`],
      ({ pageParam = 1 }) => {
        return axiosInstance.get(
          `/folder/${folderID}?limit=15&page=${pageParam}`
        );
      },
      {
        getNextPageParam: (lastPage, pages) => {
          if (pages.length === +lastPage?.data?.totalPages) {
            return undefined;
          } else {
            return pages.length + 1;
          }
        },
        cacheTime: 86400000,
        staleTime: 86400000,
        refetchOnWindowFocus: false,
        onError: () => {
          setToastDetails({
            title: t("errorFailedGetData"),
            toastState: "alert-error",
            ringState: "ring-error",
            isShown: true,
          });
        },
      }
    );

  useEffect(() => setLoading(isFetching), [isFetching]);

  return { data, isSuccess, isError, fetchNextPage, hasNextPage };
}

export default useInfiniteGetFolderTodosReq;
