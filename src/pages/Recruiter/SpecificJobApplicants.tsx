import { ApplicantsTable } from "@/components/ViewApplicants/ApplicantsTable";
import { isRecruiter } from "@/helpers";
import { useCompanyApplications } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useParams } from "react-router-dom";

export default function SpecificJobApplicants() {
  const { jobId } = useParams();
  const recruiter = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter || !recruiter) {
    throw new Error("User is not a recruiter.");
  }

  const {
    data: applications,
    isPending,
    isError,
  } = useCompanyApplications(recruiter.id);

  const selectedApplications = applications?.filter(
    (a) => String(a.job.jobId) === jobId
  );

  if (!selectedApplications) applications?.map((a) => a.job.jobId);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Job Applications</h1>
      <ApplicantsTable applications={selectedApplications ?? []} />
    </div>
  );
}
