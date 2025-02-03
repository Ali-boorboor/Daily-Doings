import ForgotPasswordForm from "@o/AuthPageOrganisms/ForgotPasswordForm";
import { forgotPassOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function ForgotPassword() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    document.title = "Forgot Password Page";
    setSrcIndex(3);
  }, []);

  return (
    <ForgotPasswordForm
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmitHandler={(values: forgotPassOnSubmitValues) => {
        console.log(values);
      }}
    />
  );
}

export default memo(ForgotPassword);
