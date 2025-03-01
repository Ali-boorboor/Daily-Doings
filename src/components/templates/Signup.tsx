import usePostReq from "@/hooks/usePostReq";
import docTitle from "@/utils/documentTitle";
import SignupForm from "@o/AuthPageOrganisms/SignupForm";
import { signupOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Signup() {
  const { t } = useTranslation();
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);
  const { mutate: postReq } = usePostReq({
    successTitle: t("successSignupToast"),
    errorTitle: t("errorSignupToast"),
    navigateTo: "/auth/login",
    url: "/signup",
  });

  useEffect(() => {
    docTitle("Signup Page");
    setSrcIndex(2);
  }, []);

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
      onSubmitHandler={(values: signupOnSubmitValues) => {
        if (values.agreeToTerms) {
          const formData = new FormData();

          formData.append("username", values.username);
          formData.append("email", values.email);
          formData.append("password", values.password);
          formData.append("cover", values.cover);

          postReq(formData);
        }
      }}
    />
  );
}

export default memo(Signup);
