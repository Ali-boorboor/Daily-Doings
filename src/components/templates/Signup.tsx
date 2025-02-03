import SignupForm from "@o/AuthPageOrganisms/SignupForm";
import { signupOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Signup() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    document.title = "Signup Page";
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
      }}
      onSubmitHandler={(values: signupOnSubmitValues) => {
        console.log(values.cover);
      }}
    />
  );
}

export default memo(Signup);
