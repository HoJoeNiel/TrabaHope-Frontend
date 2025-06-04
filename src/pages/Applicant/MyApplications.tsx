import { useState } from "react";
import ApplicantHeader from "@/components/ApplicantHeader";

import { Filter } from "lucide-react";

import FilterButton from "@/components/MyApplications/FilterButton";
import ApplicationStats from "@/components/MyApplications/ApplicationStats";
import JobApplicationCard from "@/components/MyApplications/JobApplicationCard";
import { useApplicantJobsStore } from "@/stores/useApplicantJobsStore";

const FILTER = ["All", "Pending", "Review", "Interview", "Hired", "Rejected"];

export default function MyApplications() {
  const appliedJobs = useApplicantJobsStore((state) => state.appliedJobs);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredApplications =
    statusFilter === "All"
      ? appliedJobs
      : appliedJobs.filter((app) => app.status === statusFilter);

  const stats = {
    total: appliedJobs.length,
    pending: appliedJobs.filter((app) => app.status === "Pending").length,
    interview: appliedJobs.filter((app) => app.status === "Interview").length,
    hired: appliedJobs.filter((app) => app.status === "Hired").length,
    rejected: appliedJobs.filter((app) => app.status === "Rejected").length,
  };

  return (
    <div className="min-h-screen bg-blue-50 min-w-screen">
      <ApplicantHeader />

      <main className="max-w-[1440px] mx-auto my-4">
        <div className="flex flex-col my-6 space-y-2">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>
        </div>

        <div className="w-full p-4 mb-6 bg-white rounded-lg shadow">
          <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {FILTER.map((status) => (
                <FilterButton
                  key={status}
                  status={status}
                  isSelected={status === statusFilter}
                  onClick={() => setStatusFilter(status)}
                />
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <ApplicationStats stats={stats} />

        <div className="mt-6 space-y-4">
          {filteredApplications.map((application) => (
            <JobApplicationCard key={application.id} job={application} />
          ))}
        </div>
      </main>
    </div>
  );
}
