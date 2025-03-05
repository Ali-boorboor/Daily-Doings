import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import ForgotPasswordForm from "@o/AuthPageOrganisms/ForgotPasswordForm";
import { forgotPassOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function ForgotPassword() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { mutate: postReq, error }: any = usePostReq({
    successTitle: t("successForgotPassToast"),
    errorTitle: t("errorForgotPassToast"),
    navigateTo: "/auth/login",
    url: "/user/forgot-password",
  });

  useEffect(() => {
    docTitle("Forgot Password Page");
    setSrcIndex(3);
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
    <ForgotPasswordForm
      initialValues={{
        identifier: "",
      }}
      onSubmitHandler={(values: forgotPassOnSubmitValues, { resetForm }) => {
        postReq({ reqOptions: { identifier: values.identifier } });
        resetForm();
      }}
    />
  );
}

export default memo(ForgotPassword);
