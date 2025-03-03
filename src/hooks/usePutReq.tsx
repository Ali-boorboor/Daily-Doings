import axiosInstance from "@/services/axiosInstance";
import { hasLoading, toastDetails } from "@st/globalStates";
import { useMutation, useQueryClient } from "react-query";
import { useReqHooksPropsType } from "@type/hooksTypes";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function usePutReq({
  refetchQueryKey,
  refetchQueries,
  successTitle,
  errorTitle,
  navigateTo,
  hasParams,
  url,
}: useReqHooksPropsType) {
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setLoading] = useRecoilState(hasLoading);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    ({ reqOptions, urlString }: { reqOptions?: any; urlString?: any }) => {
      const URL = hasParams ? urlString : url;

      return axiosInstance.put(URL, reqOptions);
    },
    {
      onMutate: () => setLoading(true),
      onSuccess: () => {
        refetchQueries &&
          refetchQueries.forEach((queryKey) => {
            queryClient.invalidateQueries(queryKey);
          });
        refetchQueryKey && queryClient.invalidateQueries(refetchQueryKey);
        navigateTo && navigate(navigateTo);

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
      onSettled: () => setLoading(false),
    }
  );
}

export default usePutReq;
