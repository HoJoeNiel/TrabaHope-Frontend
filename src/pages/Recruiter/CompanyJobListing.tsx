import CompanyJobCard from "@/components/CompanyDashboard/CompanyJobCard";
import { isRecruiter } from "@/helpers";
import { useCompanyJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function CompanyJobListing() {
  const company = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(company))
    throw new Error("User is not a company/recruiter.");

  const { data: jobs, isPending, isError } = useCompanyJobs(company.id);

  console.log(jobs);
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Job Listings</h1>
      <div className="grid grid-cols-2 gap-4 py-8 max-2xl:grid-cols-1">
        {jobs?.map((job) => (
          <CompanyJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
