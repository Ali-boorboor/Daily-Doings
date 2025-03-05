import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import LoginForm from "@o/AuthPageOrganisms/LoginForm";
import { loginOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Login() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { mutate: postReq, error }: any = usePostReq({
    successTitle: t("successLoginToast"),
    errorTitle: t("errorLoginToast"),
    navigateTo: "/dashboard",
    url: "/login",
  });

  useEffect(() => {
    docTitle("Login Page");
    setSrcIndex(1);
  }, []);

  useEffect(() => {
    if (+error?.status === 404 || +error?.status === 401) {
      setToastDetails({
        title: t("wrongPassOrUsername"),
        toastState: "alert-error",
        ringState: "ring-error",
        isShown: true,
      });
    }
  }, [error]);

  return (
    <LoginForm
      initialValues={{
        identifier: "",
        password: "",
      }}
      onSubmitHandler={(values: loginOnSubmitValues, { resetForm }) => {
        postReq({
          reqOptions: {
            identifier: values.identifier,
            password: values.password,
          },
        });
        resetForm();
      }}
    />
  );
}

export default memo(Login);
