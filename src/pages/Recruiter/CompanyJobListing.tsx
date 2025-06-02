import CompanyJobCard from "@/components/CompanyDashboard/CompanyJobCard";
import { isRecruiter } from "@/helpers";
import { fetchCompanyJobs } from "@/services/api";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useEffect } from "react";

export default function CompanyJobListing() {
  const companyJobs = useCompanyJobsStore((state) => state.jobs);
  const company = useLoggedInUserStore((state) => state.user);
  const setJobs = useCompanyJobsStore((state) => state.setJobs);

  if (!isRecruiter(company))
    throw new Error("User is not a company/recruiter.");

  useEffect(() => {
    fetchCompanyJobs(company.id).then((jobs) => {
      if (!jobs) throw new Error("Failed to fetch jobs.");
      console.log(jobs);
      setJobs(jobs);
    });
  }, [company.id, setJobs]);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Job Listings</h1>
      <div className="grid grid-cols-2 gap-4 p-12 max-2xl:grid-cols-1">
        {companyJobs?.map((job) => (
          <CompanyJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
