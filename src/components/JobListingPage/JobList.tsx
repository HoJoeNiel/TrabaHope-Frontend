import { SelectComponent } from "@/components/SelectComponent";
import { isApplicant } from "@/helpers";
import { useApplicantJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import Loading from "../Loading";
import JobCard from "./JobCard";

const options = ["Best Match", "Latest", "Salary (High to Low)"];

type Props = {
  searchQuery: string;
  salary: string;
  location: string;
};

export default function JobList({ searchQuery, salary, location }: Props) {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  const [min_salary, max_salary] = salary.split("-").map(Number);

  const query = {
    applicantId: applicant?.id,
    interests: ["Frontend", "Backend", "Fullstack"],
    filters: {
      search: searchQuery,
      min_salary: min_salary ?? 0,
      max_salary: max_salary ?? 0,
      location,
    },
  };

  console.log(query);

  const { data: jobs, isPending, isError } = useApplicantJobs();

  if (isPending) return <Loading />;
  if (isError)
    return (
      <div className="flex items-center justify-center flex-1">
        <span>An error occured.</span>
      </div>
    ); // temporary lang
  if (!jobs?.length)
    return (
      <div className="flex items-center justify-center flex-1">
        <span>No jobs available.</span>
      </div>
    );

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
        {jobs?.map((job) => (
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
