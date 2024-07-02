import { Outlet } from "react-router-dom";
import LeftNav from "../pages/dashboard/LeftNav";
import TopNav from "../pages/dashboard/TopNav";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-content1">
      <TopNav />
      <div className="flex items-start mt-3">
        <LeftNav />
        <div className=" max-w-[1000px] w-full mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
