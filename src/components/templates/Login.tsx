import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import LoginForm from "@o/AuthPageOrganisms/LoginForm";
import { loginOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Login() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const { mutate: postReq } = usePostReq({
    successTitle: t("successLoginToast"),
    errorTitle: t("errorLoginToast"),
    navigateTo: "/dashboard",
    url: "/login",
  });

  useEffect(() => {
    docTitle("Login Page");
    setSrcIndex(1);
  }, []);

  return (
    <LoginForm
      initialValues={{
        identifier: "",
        password: "",
      }}
      onSubmitHandler={(values: loginOnSubmitValues) => {
        postReq({
          identifier: values.identifier,
          password: values.password,
        });
      }}
    />
  );
}

export default memo(Login);
