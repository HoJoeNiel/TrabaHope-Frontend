import JobCard from "@/components/JobListingPage/JobCard";
import { isApplicant } from "@/helpers";
import { useSavedJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function SavedJobsPage() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant))
    throw new Error("User logged in is not an applicant.");

  const { data: savedJobs } = useSavedJobs(applicant.id);

  console.log(savedJobs);

  return (
    <div className="flex flex-col min-h-screen p-4 min-w-screen">
      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col my-6 space-y-2">
          <h1 className="text-2xl font-bold">Saved Jobs</h1>
          <p className="text-gray-600">
            Jobs you've saved for later. Apply when you're ready.
          </p>
        </div>

        {savedJobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}
