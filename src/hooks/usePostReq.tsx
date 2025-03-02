import axiosInstance from "@/services/axiosInstance";
import { hasLoading, toastDetails } from "@st/globalStates";
import { useMutation, useQueryClient } from "react-query";
import { useReqHooksPropsType } from "@type/hooksTypes";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function usePostReq({
  url,
  refetchQueryKey,
  successTitle,
  errorTitle,
  navigateTo,
}: useReqHooksPropsType) {
  const [, setToastDetails] = useRecoilState(toastDetails);
  const [, setLoading] = useRecoilState(hasLoading);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((reqOptions: any) => axiosInstance.post(url, reqOptions), {
    onMutate: () => setLoading(true),
    onSuccess: () => {
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
  });
}

export default usePostReq;
