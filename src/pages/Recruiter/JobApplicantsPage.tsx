import { ApplicantsTable } from "@/components/ViewApplicants/ApplicantsTable";
import { useApplicationsStore } from "@/stores/useApplicationsStore";

export default function JobApplicantsPage() {
  const applications = useApplicationsStore((state) => state.applications);
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Applications</h1>

      <ApplicantsTable applications={applications ?? []} />
    </div>
  );
}
