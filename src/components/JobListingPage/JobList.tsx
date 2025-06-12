import { isApplicant } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { ApplicantJob, Query } from "@/types";
import { fetchRecommendedJobs } from "@/services/api";
import Loading from "../Loading";

import noJobsFound from "@/assets/Empty-cuate.svg";

type Props = {
  searchQuery: string;
  minSalary: number | undefined;
  maxSalary: number | undefined;
  location: string;
};

export default function JobList({
  searchQuery,
  minSalary,
  maxSalary,
  location,
}: Props) {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  // const { mutate: fetchJobs, isPending, isError } = useFetchRecommendedJobs();
  const [jobs, setJobs] = useState<ApplicantJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const query: Query = {
      applicantId: applicant?.id,
      interests: applicant.interest,
      filters: {
        search: searchQuery,
        min_salary: minSalary ?? 0,
        max_salary: maxSalary ?? 0,
        location,
      },
    };

    fetchRecommendedJobs(query).then((jobs) => {
      setJobs(jobs);
      setIsLoading(false);
    });
  }, [
    applicant.id,
    applicant.interest,
    location,
    minSalary,
    maxSalary,
    searchQuery,
  ]);

  return (
    <div className="flex-1">
      <div className="mb-3">
        <span className="font-medium text-gray-300">
          Showing {(jobs ?? []).length} opportunities
        </span>
      </div>
      <div className="max-h-[850px] overflow-y-scroll thin-scrollbar">
        {isLoading && <Loading />}
        {!isLoading && jobs.length === 0 && (
          <div className="flex flex-col w-full justify-center items-center h-[700px]">
            <img src={noJobsFound} alt="No jobs found" className="w-[400px]" />
            <p className="text-lg text-gray-300">
              No jobs match your current filters, resume, or interests. Try
              adjusting your search to see more opportunities.
            </p>
          </div>
        )}
        {!isLoading && jobs?.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}

// <div className="flex justify-center w-full mt-4 mb-8">
//   TODO: load more jobs, pagination thingy. Tanong nalang kay luis pano talaga to
//   <button className="px-4 py-2 border rounded-lg text-sky-600 border-sky-600">
//     Load more Jobs
//   </button>
// </div>;
