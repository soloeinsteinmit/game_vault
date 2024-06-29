import React from "react";
import { NavLink } from "react-router-dom";

function NavLinkCard({ icon, linkName = "Name here...", to = "/dashboard" }) {
  return (
    <NavLink to={to} className="flex gap-2 items-center justify-start">
      <div className="rounded-small bg-content3 h-7 w-7 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs">{linkName}</span>
    </NavLink>
  );
}

export default NavLinkCard;
