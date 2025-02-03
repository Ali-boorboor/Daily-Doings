import AuthPagesCover from "@o/AuthPageOrganisms/AuthPagesCover";
import { Outlet } from "react-router";
import { memo } from "react";

function AuthPage() {
  return (
    <>
      <div className="flex justify-between gap-4 items-center w-screen h-screen flex-wrap md:flex-nowrap">
        <AuthPagesCover />
        <Outlet />
      </div>
    </>
  );
}

export default memo(AuthPage);
