import {
  BriefcaseBusiness,
  Building,
  CalendarClock,
  LayoutDashboard,
  Settings,
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
            alert
          />
          <SidebarItem
            icon={Users}
            text="Applications"
            path="applications"
            alert
          />
          <SidebarItem
            icon={CalendarClock}
            text="Interviews"
            path="interviews"
            alert
          />
          <SidebarItem
            icon={Building}
            text="Company Profile"
            path="profile"
            alert
          />
          <SidebarItem icon={Settings} text="Settings" path="settings" alert />
        </CompanySidebar>
        <div className="flex-1 max-h-screen overflow-y-scroll thin-scrollbar max-xl:pl-16">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
