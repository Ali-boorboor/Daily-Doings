import { sidebarLinksPropsType } from "@type/moleculesTypes";
import { NavLink } from "react-router-dom";
import { memo } from "react";

function SidebarLinks({ icon, title, href }: sidebarLinksPropsType) {
  const activeLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `btn font-bold md:flex justify-center md:justify-start items-center md:gap-4 ${
      isActive ? "btn-primary" : "btn-ghost btn-outline"
    }`;

  return (
    <div className="tooltip" data-tip={title}>
      <NavLink to={href} className={activeLinkStyle}>
        {icon}
        <span className="min-w-20">{title}</span>
      </NavLink>
    </div>
  );
}

export default memo(SidebarLinks);
