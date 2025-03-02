import useGetReq from "@/hooks/useGetReq";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toastDetails } from "@st/globalStates";
import { memo, useEffect, useState } from "react";

function PrivateRoute({ children }: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [IsAuth, setIsAuth] = useState(false);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { data, isSuccess, isError } = useGetReq({
    queryKey: "AUTH",
    url: "/auth",
  });

  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
    } else if (isError) {
      setToastDetails({
        title: t("privateRouteFailed"),
        ringState: "ring-warning",
        toastState: "alert-warning",
        isShown: true,
      });
      navigate("/auth/login");
    }
  }, [data, isSuccess, isError]);

  return IsAuth && children;
}

export default memo(PrivateRoute);
