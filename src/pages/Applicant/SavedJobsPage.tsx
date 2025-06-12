import noSavedJobs from "@/assets/Empty-bro.svg";
import JobCard from "@/components/JobListingPage/JobCard";
import Loading from "@/components/Loading";
import { isApplicant } from "@/helpers";
import { useSavedJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function SavedJobsPage() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant))
    throw new Error("User logged in is not an applicant.");

  const { data: savedJobs, isPending } = useSavedJobs(applicant.id);

  return (
    <div className="flex flex-col min-h-screen p-4 min-w-screen">
      <main className="flex-1 w-full mx-auto">
        <div className="flex flex-col mb-4 space-y-2">
          <h1 className="text-2xl font-bold text-white">Saved Jobs</h1>
          <p className="text-gray-300">
            Jobs you've saved for later. Apply when you're ready.
          </p>
        </div>

        {isPending && <Loading />}
        {savedJobs?.length === 0 && !isPending && (
          <div className="flex flex-col w-full justify-center items-center h-[700px]">
            <img src={noSavedJobs} alt="No saved jobs" className="w-[400px]" />
            <p className="text-lg text-gray-300">
              You haven’t saved any job postings yet. Start saving jobs to
              easily find them later!
            </p>
          </div>
        )}
        {savedJobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}
