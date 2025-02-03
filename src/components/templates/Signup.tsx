import SignupForm from "@o/AuthPageOrganisms/SignupForm";
import { AuthPagesCoverState } from "@st/organismsStates";
import { useRecoilState } from "recoil";
import { memo, useEffect } from "react";

function Signup() {
  const [, setSrcIndex] = useRecoilState(AuthPagesCoverState);

  useEffect(() => {
    document.title = "Signup Page";
    setSrcIndex(2);
  }, []);

  return <SignupForm />;
}

export default memo(Signup);
