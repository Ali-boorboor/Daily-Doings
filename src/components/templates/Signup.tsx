import docTitle from "@/utils/documentTitle";
import SignupForm from "@o/AuthPageOrganisms/SignupForm";
import { signupOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Signup() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

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
          console.log(values);
        }
      }}
    />
  );
}

export default memo(Signup);
