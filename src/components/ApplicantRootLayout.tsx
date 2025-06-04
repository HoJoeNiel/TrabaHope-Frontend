import { Outlet } from "react-router-dom";

import {
  BriefcaseBusiness,
  Building,
  CalendarCheck,
  CalendarClock,
  LayoutDashboard,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import { getRelativeTimeAgo } from "@/helpers";
import { Application } from "@/types";
import ProtectedRoute from "./ProtectedRoute";
import ApplicantSidebar, { ApplicantSidebarItem } from "./ApplicantSidebar";

const applicationNotifs: Application[] = [
  {
    name: "Jonel Villaver",
    jobId: "job_01a2b3c",
    jobTitle: "Frontend Developer",
    appliedAt: new Date().toISOString(),
  },
  {
    name: "Maria Santos",
    jobId: "job_04d5e6f",
    jobTitle: "Backend Developer",
    appliedAt: new Date("2025-05-21T08:45:00"),
  },
  {
    name: "Carlos Reyes",
    jobId: "job_07g8h9i",
    jobTitle: "UI/UX Designer",
    appliedAt: new Date("2025-05-20T15:15:00"),
  },
  {
    name: "Liza Dela Cruz",
    jobId: "job_10j11k12",
    jobTitle: "Data Analyst",
    appliedAt: new Date("2025-05-19T13:05:00"),
  },
  {
    name: "Arnold Mendoza",
    jobId: "job_13l14m15",
    jobTitle: "Software Engineer",
    appliedAt: new Date("2025-05-18T09:20:00"),
  },
];

export default function ApplicantRootLayout() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-stone-50 min-w-screen">
        <ApplicantSidebar>
          <ApplicantSidebarItem
            icon={LayoutDashboard}
            text="Dashboard"
            path="dashboard"
          />
          <ApplicantSidebarItem
            icon={BriefcaseBusiness}
            text="Job Listings"
            path="job-listings"
            alert
          />
          <ApplicantSidebarItem
            icon={Users}
            text="Applications"
            path="applications"
            alert
          />
          <ApplicantSidebarItem
            icon={CalendarClock}
            text="Interviews"
            path="interviews"
            alert
          />
          <ApplicantSidebarItem
            icon={Building}
            text="Company Profile"
            path="profile"
            alert
          />
          <ApplicantSidebarItem
            icon={Settings}
            text="Settings"
            path="settings"
            alert
          />
        </ApplicantSidebar>
        <div className="flex-1 max-h-screen overflow-y-scroll thin-scrollbar max-xl:pl-16">
          <Outlet />
        </div>
        {/* Notification sidebar */}
        <div className="max-h-screen max-md:hidden bg-white px-4 sticky top-0 right-0 overflow-y-scroll border-l w-[300px] pt-6 thin-scrollbar">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              Recent Applications
            </h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>
          <div>
            {applicationNotifs.map((application) => (
              <ApplicationNotificationItem
                key={application.jobId}
                application={application}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              Upcoming Interviews
            </h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>
          <div>
            {applicationNotifs.map((application) => (
              <InterviewNotificationItem
                key={application.jobId}
                application={application}
              />
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

function ApplicationNotificationItem({
  application,
}: {
  application: Application;
}) {
  return (
    <div className="flex p-1 my-4 space-x-3 rounded hover:bg-gray-100">
      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full shadow size-10">
        <UserPlus className="text-gray-500 size-6" />
      </div>
      <div className="text-sm">
        <span>{application.name}</span>
        <span className="font-light"> applied for the </span>
        <span>{application.jobTitle}</span>
        <span className="font-light"> role.</span>
        <span className="block text-xs text-gray-600">
          {getRelativeTimeAgo(application.appliedAt.toLocaleString())}
        </span>
      </div>
    </div>
  );
}

function InterviewNotificationItem({
  application,
}: {
  application: Application;
}) {
  return (
    <div className="flex p-1 my-4 space-x-3 hover:bg-gray-100">
      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full shadow size-10">
        <CalendarCheck className="text-gray-500 size-6" />
      </div>
      <div className="text-sm">
        <span className="font-light">Interview confirmed: </span>
        <span>{application.name} </span>
        <span className="font-light"> for </span>
        <span>{application.jobTitle}</span>
        <span className="block text-xs text-gray-600">
          {getRelativeTimeAgo(application.appliedAt.toLocaleString())}
        </span>
      </div>
    </div>
  );
}
