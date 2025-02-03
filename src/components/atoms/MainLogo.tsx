import { mainLogoPropsType } from "@type/atomsTypes";
import { Link } from "react-router";
import { memo } from "react";

function MainLogo({ style, linkTo }: mainLogoPropsType) {
  return (
    <Link to={linkTo ? linkTo : "/dashboard"} className={style}>
      <img
        src="/images/main-logo.png"
        alt="main-logo"
        className="w-full h-full object-cover"
      />
    </Link>
  );
}

export default memo(MainLogo);
