import {
  BriefcaseBusiness,
  Building,
  CalendarClock,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Outlet } from "react-router-dom";

import CompanySidebar, { SidebarItem } from "./CompanySidebar";
import ProtectedRoute from "./ProtectedRoute";

export default function CompanyRootLayout() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 min-w-screen">
        <CompanySidebar>
          <SidebarItem
            icon={LayoutDashboard}
            text="Dashboard"
            path="dashboard"
          />
          <SidebarItem
            icon={BriefcaseBusiness}
            text="Job Listings"
            path="job-listings"
          />
          <SidebarItem icon={Users} text="Applications" path="applications" />
          <SidebarItem
            icon={CalendarClock}
            text="Interviews"
            path="interviews"
          />
          <SidebarItem icon={Building} text="Company Profile" path="profile" />
        </CompanySidebar>
        <div className="flex-1 max-h-screen overflow-y-scroll thin-scrollbar max-xl:pl-16">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
