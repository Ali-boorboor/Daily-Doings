import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import SignupForm from "@o/AuthPageOrganisms/SignupForm";
import { signupOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { toastDetails } from "@st/globalStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Signup() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const [, setToastDetails] = useRecoilState(toastDetails);
  const { mutate: postReq, error }: any = usePostReq({
    successTitle: t("successSignupToast"),
    errorTitle: t("errorSignupToast"),
    navigateTo: "/auth/login",
    url: "/signup",
  });

  useEffect(() => {
    docTitle("Signup Page");
    setSrcIndex(2);
  }, []);

  useEffect(() => {
    if (+error?.status === 409) {
      setToastDetails({
        title: t("repeatedUsernameEmail"),
        toastState: "alert-error",
        ringState: "ring-error",
        isShown: true,
      });
    }
  }, [error]);

  return (
    <SignupForm
      initialValues={{
        username: "",
        email: "",
        cover: null,
        password: "",
        submitPassword: "",
        agreeToTerms: false,
      }}
      onSubmitHandler={(values: signupOnSubmitValues, { resetForm }) => {
        if (values.agreeToTerms) {
          const formData = new FormData();

          formData.append("username", values.username);
          formData.append("email", values.email);
          formData.append("password", values.password);
          formData.append("cover", values.cover);

          postReq({ reqOptions: formData });
          resetForm();
        }
      }}
    />
  );
}

export default memo(Signup);
