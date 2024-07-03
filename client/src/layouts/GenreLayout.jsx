import React from "react";
import { Outlet } from "react-router-dom";

const GenreLayout = () => {
  return (
    <div className="flex w-full flex-col lg-tab:px-10 xs-tab:px-5">
      <p className="text-4xl font-extrabold mb-1">Genres</p>
      <Outlet />
    </div>
  );
};

export default GenreLayout;
