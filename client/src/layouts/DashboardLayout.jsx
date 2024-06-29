import { Outlet } from "react-router-dom";
import LeftNav from "../pages/dashboard/LeftNav";
import TopNav from "../pages/dashboard/TopNav";

function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="flex items-start">
        <LeftNav />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
