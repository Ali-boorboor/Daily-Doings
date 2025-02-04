import { sidebarLinksPropsType } from "@type/moleculesTypes";
import { NavLink } from "react-router";
import { memo } from "react";

function SidebarLinks({ icon, title, href }: sidebarLinksPropsType) {
  const activeLinkStyle = ({ isActive }: any) =>
    `btn font-roboto-bold tooltip md:flex justify-center md:justify-start items-center md:gap-4 ${
      isActive ? "btn-primary" : "btn-ghost btn-outline"
    }`;

  return (
    <NavLink to={href} data-tip={title} className={activeLinkStyle}>
      {icon}
      <span className="hidden md:inline-block">{title}</span>
    </NavLink>
  );
}

export default memo(SidebarLinks);
