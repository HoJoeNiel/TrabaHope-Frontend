import CompanyJobCard from "@/components/CompanyDashboard/CompanyJobCard";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";

export default function CompanyJobListing() {
  const companyJobs = useCompanyJobsStore((state) => state.jobs);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Job Listings</h1>
      <div className="grid grid-cols-2 p-12 space-x-8">
        {companyJobs.map((job) => (
          <CompanyJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
