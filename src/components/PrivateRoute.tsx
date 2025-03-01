import usePostReq from "@/hooks/usePostReq";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userDetails } from "@st/globalStates";
import { memo, useEffect, useState } from "react";

function PrivateRoute({ children }: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [IsAuth, setIsAuth] = useState(false);
  const [, setUserInfo] = useRecoilState(userDetails);
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
      setUserInfo({ username: data?.data?.username, cover: data?.data?.cover });
    } else if (isError) {
      navigate("/auth/login");
    }
  }, [data, isSuccess, isError]);

  return IsAuth && children;
}

export default memo(PrivateRoute);
