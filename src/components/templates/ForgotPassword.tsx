import ForgotPasswordForm from "@o/AuthPageOrganisms/ForgotPasswordForm";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function ForgotPassword() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    document.title = "Forgot Password Page";
    setSrcIndex(3);
  }, []);

  return <ForgotPasswordForm />;
}

export default memo(ForgotPassword);
