import axiosInstance from "@/services/axiosInstance";
import { hasLoading, toastDetails } from "@st/globalStates";
import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function useInfiniteGetSearchReq() {
  const queries = useLocation();
  const subject = queries?.search?.split("subject=")[1];
  const { t } = useTranslation();
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setLoading] = useRecoilState(hasLoading);

  const { data, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["SEARCH", `SEARCH-${subject}`],
      ({ pageParam = 1 }) => {
        return axiosInstance.get(
          `/todo/search?subject=${subject}&limit=15&page=${pageParam}`
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

export default useInfiniteGetSearchReq;
