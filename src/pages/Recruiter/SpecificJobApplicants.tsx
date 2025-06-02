import { ApplicantsTable } from "@/components/ViewApplicants/ApplicantsTable";
import { useApplicationsStore } from "@/stores/useApplicationsStore";
import { useParams } from "react-router-dom";

export default function SpecificJobApplicants() {
  const { jobId } = useParams();
  const applications = useApplicationsStore((state) => state.applications);
  const selectedApplications = applications?.filter(
    (a) => String(a.jobApplied.id) === jobId
  );

  if (!selectedApplications) applications?.map((a) => a.jobApplied.id);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Job Applications</h1>
      <ApplicantsTable applications={selectedApplications ?? []} />
    </div>
  );
}
