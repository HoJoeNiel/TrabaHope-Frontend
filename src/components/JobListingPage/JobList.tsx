import { SelectComponent } from "@/components/SelectComponent";
import { isApplicant } from "@/helpers";
import { useApplicantJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import JobCard from "./JobCard";
import Loading from "../Loading";

const options = ["Best Match", "Latest", "Salary (High to Low)"];

export default function JobList() {
  const applicant = useLoggedInUserStore((state) => state.user);

  const { data: jobs, isLoading, isError } = useApplicantJobs();

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  if (isLoading) return <Loading />;
  if (isError) return <p>An error occured.</p>; // temporary lang
  if (!jobs?.length) return <p>No jobs available.</p>;

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
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-4 mb-8">
        {/* TODO: load more jobs, pagination thingy. Tanong nalang kay luis pano talaga to */}
        <button className="px-4 py-2 border rounded-lg text-sky-600 border-sky-600">
          Load more Jobs
        </button>
      </div>
    </div>
  );
}
