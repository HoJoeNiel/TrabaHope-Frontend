import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import noJobs from "@/assets/Empty-cuate.svg";
import LoadingHero from "@/assets/Loading-pana.svg";
import CompanyJobCard from "@/components/CompanyDashboard/CompanyJobCard";
import { isRecruiter } from "@/helpers";
import { useCompanyJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function CompanyJobListing() {
  const company = useLoggedInUserStore((state) => state.user);
  const navigate = useNavigate();

  if (!isRecruiter(company))
    throw new Error("User is not a company/recruiter.");

  const { data: jobs, isPending } = useCompanyJobs(company.id);

  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-white">Job Listings</h1>
        <button
          onClick={() => navigate("/recruiter/create-new-job")}
          className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center space-x-2"
        >
          <Plus className="size-5" />
          <span>Create Job Posting</span>
        </button>
      </div>
      <div className="">
        {isPending && (
          <div className="flex flex-col items-center justify-center w-full h-[700px]">
            <img src={LoadingHero} className="w-[500px]" />
            <p className="block text-lg text-gray-300 ">
              Loading your job postings. Hang tight, this won’t take long!
            </p>
          </div>
        )}
        {jobs?.length === 0 && !isPending && (
          <div className="flex flex-col items-center justify-center w-full h-[700px]">
            <img src={noJobs} className="w-[500px]" />
            <p className="block text-lg text-gray-300 ">
              You haven’t posted any jobs yet. Get started by creating your
              first job posting!
            </p>
          </div>
        )}
        {jobs?.map((job) => (
          <CompanyJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
