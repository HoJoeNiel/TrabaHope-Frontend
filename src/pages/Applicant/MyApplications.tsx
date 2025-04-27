import { useState } from "react";
import ApplicantHeader from "@/components/ApplicantHeader";

import { Filter } from "lucide-react";

import FilterButton from "@/components/MyApplications/FilterButton";
import ApplicationStats from "@/components/MyApplications/ApplicationStats";
import JobApplicationCard from "@/components/MyApplications/JobApplicationCard";
import { useJobStore } from "@/stores/useJobStore";

const FILTER = ["All", "Pending", "Review", "Interview", "Hired", "Rejected"];

export default function MyApplications() {
  const appliedJobs = useJobStore((state) => state.appliedJobs);
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
    <div className="bg-blue-50 min-h-screen min-w-screen">
      <ApplicantHeader />

      <main className="max-w-[1440px] mx-auto my-4">
        <div className="flex flex-col space-y-2 my-6">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>
        </div>

        <div className="w-full bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
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
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
              
        <ApplicationStats stats={stats} />

        <div className="space-y-4 mt-6">
          {filteredApplications.map((application) => (
            <JobApplicationCard key={application.id} job={application} />
          ))}
        </div>
      </main>
    </div>
  );
}
