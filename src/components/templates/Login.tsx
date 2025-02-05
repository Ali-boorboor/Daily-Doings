import docTitle from "@/utils/documentTitle";
import LoginForm from "@o/AuthPageOrganisms/LoginForm";
import { loginOnSubmitValues } from "@type/templatesTypes";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Login() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    docTitle("Login Page");
    setSrcIndex(1);
  }, []);

  return (
    <LoginForm
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmitHandler={(values: loginOnSubmitValues) => {
        console.log(values);
      }}
    />
  );
}

export default memo(Login);
