import { Outlet } from "react-router-dom";
import LeftNav from "../pages/dashboard/LeftNav";
import TopNav from "../pages/dashboard/TopNav";

function DashboardLayout() {
  return (
    <div className="min-h-scree bg-content1">
      <TopNav />
      <div className="flex items-start mt-3">
        <LeftNav />
        <div className=" max-w-[1000px] w-[900px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
