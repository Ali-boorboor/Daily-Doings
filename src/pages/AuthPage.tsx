import AuthPagesCover from "@o/AuthPageOrganisms/AuthPagesCover";
import { Outlet } from "react-router";
import { memo } from "react";

import LangTogleBtn from "@/components/molecules/LangTogleBtn";

function AuthPage() {
  return (
    <>
      <div className="flex rtl:flex-row-reverse relative justify-between gap-4 items-center w-screen h-screen flex-wrap md:flex-nowrap">
        <AuthPagesCover />
        <div className="absolute top-6 right-6">
          <LangTogleBtn />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default memo(AuthPage);
