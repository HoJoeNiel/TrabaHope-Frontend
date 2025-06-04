import { useEffect } from "react";

import { SelectComponent } from "@/components/SelectComponent";
import {
  fetchApplicantJobs,
  fetchAppliedJobs,
  fetchSavedJobs,
} from "@/services/api";
import { useApplicantJobsStore } from "@/stores/useApplicantJobsStore";

import JobCard from "./JobCard";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { isApplicant } from "@/helpers";
import { useApplicationsStore } from "@/stores/useApplicationsStore";

const options = ["Best Match", "Latest", "Salary (High to Low)"];

export default function JobList() {
  const applicant = useLoggedInUserStore((state) => state.user);
  const jobs = useApplicantJobsStore((state) => state.jobs);
  const setJob = useApplicantJobsStore((state) => state.setJobs);
  const setApplications = useApplicationsStore(
    (state) => state.setApplications
  );

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  useEffect(() => {
    fetchApplicantJobs().then((jobs) => {
      setJob(jobs);
    });

    fetchAppliedJobs(applicant.id).then((jobs) => {
      console.log(jobs);
      setApplications(jobs);
    });

    fetchSavedJobs(applicant.id).then((savedJobs) =>
      console.log("saved jobs: ", savedJobs)
    );
  }, [setJob, applicant.id, setApplications]);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-800">
          Showing {(jobs ?? []).length} opportunities
        </span>

        <div className="flex items-center mb-3 space-x-4">
          <span className="text-sm">Sort by:</span>
          <SelectComponent
            options={options}
            className="w-[180px] bg-white border-none shadow"
          />
        </div>
      </div>
      <div className="max-h-[700px] overflow-y-scroll thin-scrollbar">
        {!jobs && <p>No jobs available.</p>}
        {(jobs ?? []).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-4 mb-8">
        <button className="px-4 py-2 border rounded-lg text-sky-600 border-sky-600">
          Load more Jobs
        </button>
      </div>
    </div>
  );
}
