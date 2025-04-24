import JobCard from "./JobCard";
import { JOBS } from "@/constants/constants";
import { SelectComponent } from "./SelectComponent";

export default function JobList() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 font-medium">
          Showing 245 opportunities
        </span>

        <div className="flex space-x-4 mb-3 items-center">
          <span className="text-sm">Sort by: </span>
          <SelectComponent />
        </div>
      </div>
      <div className="">
        {JOBS.map((job) => (
          <JobCard key={job.description} job={job} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-4 mb-8">
        <button className="text-sky-600 border border-sky-600 px-4 py-2 rounded-lg">
          Load more Jobs
        </button>
      </div>
    </div>
  );
}
