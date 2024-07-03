import React from "react";
import { Outlet } from "react-router-dom";

const PlatformLayout = () => {
  return (
    <div className="flex w-full flex-col">
      <p className="text-4xl font-extrabold mb-1">Playform</p>
      <Outlet />
    </div>
  );
};

export default PlatformLayout;
