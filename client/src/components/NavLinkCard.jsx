import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navlinks_card.css";

function NavLinkCard({ icon, linkName = "Name here...", to = "/" }) {
  return (
    <NavLink
      to={to}
      className="flex gap-2 items-center justify-start link-wrapper"
    >
      <div className="rounded-small bg-content3 h-7 w-7 flex items-center justify-center icon-container">
        {icon}
      </div>
      <span className="text-xs bg-prim">{linkName}</span>
    </NavLink>
  );
}

export default NavLinkCard;
