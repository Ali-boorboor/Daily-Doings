import axiosInstance from "@/services/axiosInstance";
import { hasLoading, toastDetails } from "@st/globalStates";
import { useGetReqHookPropsType } from "@type/hooksTypes";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { useEffect } from "react";

function useGetReq({
  url,
  queryKey,
  successTitle,
  errorTitle,
  cacheTime,
  staleTime,
  refetchOnWindowFocus,
}: useGetReqHookPropsType) {
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setLoading] = useRecoilState(hasLoading);

  const { data, isFetching, isSuccess, isError } = useQuery(
    queryKey,
    () => axiosInstance.get(url),
    {
      cacheTime: cacheTime || 0,
      staleTime: staleTime || 0,
      refetchOnWindowFocus: refetchOnWindowFocus || false,
      onSuccess: () => {
        successTitle &&
          setToastDetails({
            title: successTitle,
            toastState: "alert-success",
            ringState: "ring-success",
            isShown: true,
          });
      },
      onError: () => {
        errorTitle &&
          setToastDetails({
            title: errorTitle,
            toastState: "alert-error",
            ringState: "ring-error",
            isShown: true,
          });
      },
    }
  );

  useEffect(() => setLoading(isFetching), [isFetching]);

  return { data, isSuccess, isError };
}

export default useGetReq;
