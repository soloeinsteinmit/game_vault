import React from "react";
import { Outlet } from "react-router-dom";

const PlatformLayout = () => {
  return (
    <div className="flex w-full flex-col lg-tab:px-10 xs-tab:px-5">
      <p className="text-4xl font-extrabold mb-1">Platforms</p>
      <Outlet />
    </div>
  );
};

export default PlatformLayout;
