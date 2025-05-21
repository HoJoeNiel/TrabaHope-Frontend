import { Outlet } from "react-router-dom";
import CompanySidebar, { SidebarItem } from "./CompanySidebar";
import {
  BriefcaseBusiness,
  Building,
  CalendarClock,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export default function CompanyRootLayout() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex">
      <CompanySidebar>
        <SidebarItem
          icon={<LayoutDashboard size={25} />}
          text="Dashboard"
          path="dashboard"
        />
        <SidebarItem
          icon={<BriefcaseBusiness size={25} />}
          text="Job Listings"
          path="job-listings"
          alert
        />
        <SidebarItem
          icon={<Users size={25} />}
          text="Applicants"
          path="applicants"
          alert
        />
        <SidebarItem
          icon={<CalendarClock size={25} />}
          text="Interviews"
          path="interviews"
          alert
        />
        <SidebarItem
          icon={<Building size={25} />}
          text="Company Profile"
          path="profile"
          alert
        />
        <SidebarItem
          icon={<Settings size={30} />}
          text="Settings"
          path="settings"
          alert
        />
      </CompanySidebar>
      <Outlet />
    </div>
  );
}
