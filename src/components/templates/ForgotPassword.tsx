import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import ForgotPasswordForm from "@o/AuthPageOrganisms/ForgotPasswordForm";
import { forgotPassOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function ForgotPassword() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const { mutate: postReq } = usePostReq({
    successTitle: t("successForgotPassToast"),
    errorTitle: t("errorForgotPassToast"),
    navigateTo: "/auth/login",
    url: "/user/forgot-password",
  });

  useEffect(() => {
    docTitle("Forgot Password Page");
    setSrcIndex(3);
  }, []);

  return (
    <ForgotPasswordForm
      initialValues={{
        identifier: "",
      }}
      onSubmitHandler={(values: forgotPassOnSubmitValues) => {
        postReq({ reqOptions: { identifier: values.identifier } });
      }}
    />
  );
}

export default memo(ForgotPassword);
