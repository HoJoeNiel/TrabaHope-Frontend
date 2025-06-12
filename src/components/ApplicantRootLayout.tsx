import {
  BookMarked,
  BriefcaseBusiness,
  CalendarClock,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";
import { Outlet } from "react-router-dom";

import ApplicantSidebar, { ApplicantSidebarItem } from "./ApplicantSidebar";
import ProtectedRoute from "./ProtectedRoute";

export default function ApplicantRootLayout() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 min-w-screen">
        <ApplicantSidebar>
          <ApplicantSidebarItem
            icon={LayoutDashboard}
            text="Dashboard"
            path="dashboard"
          />
          <ApplicantSidebarItem
            icon={BriefcaseBusiness}
            text="Job Listings"
            path="job-listing"
            alert
          />
          <ApplicantSidebarItem
            icon={Users}
            text="Applications"
            path="applications"
            alert
          />
          <ApplicantSidebarItem
            icon={BookMarked}
            text="Saved Jobs"
            path="saved-jobs"
            alert
          />
          <ApplicantSidebarItem
            icon={CalendarClock}
            text="Interviews"
            path="interviews"
            alert
          />
          <ApplicantSidebarItem
            icon={User}
            text="Applicant Profile"
            path="profile"
            alert
          />
        </ApplicantSidebar>
        <div className="flex-1 max-h-screen overflow-y-scroll thin-scrollbar max-xl:pl-16">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
