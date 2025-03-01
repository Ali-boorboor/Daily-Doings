import usePostReq from "@/hooks/usePostReq";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";

function PrivateRoute({ children }: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [IsAuth, setIsAuth] = useState(false);
  const {
    mutate: postReq,
    data,
    isSuccess,
    isError,
  } = usePostReq({
    errorTitle: t("privateRouteFailed"),
    url: "/auth",
  });

  useEffect(() => {
    postReq({});
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
    } else if (isError) {
      navigate("/login");
    }
  }, [data, isSuccess, isError]);

  return IsAuth && children;
}

export default memo(PrivateRoute);
