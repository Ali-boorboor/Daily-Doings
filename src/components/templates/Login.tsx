import LoginForm from "@o/AuthPageOrganisms/LoginForm";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Login() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    document.title = "Login Page";
    setSrcIndex(1);
  }, []);

  return <LoginForm />;
}

export default memo(Login);
