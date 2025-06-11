import CompanyJobCard from "@/components/CompanyDashboard/CompanyJobCard";
import { isRecruiter } from "@/helpers";
import { useCompanyJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import LoadingHero from "@/assets/Loading-pana.svg";

export default function CompanyJobListing() {
  const company = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(company))
    throw new Error("User is not a company/recruiter.");

  const { data: jobs, isPending, isError } = useCompanyJobs(company.id);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold text-white">Job Listings</h1>
      <div className="">
        {isPending && (
          <div className="flex flex-col items-center justify-center w-full h-[700px]">
            <img src={LoadingHero} className="w-[500px]" />
            <p className="block text-lg text-gray-300 ">Loading your job postings. Hang tight, this won’t take long!</p>
          </div>
        )}
        {jobs?.map((job) => (
          <CompanyJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
