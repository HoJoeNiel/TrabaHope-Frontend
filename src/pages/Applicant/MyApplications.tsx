import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useAppliedJobs } from "@/services/queries";
import { isApplicant } from "@/helpers";
import { MyApplicationsTable } from "@/components/MyApplications/MyApplicationsTable";

export default function MyApplications() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant))
    throw new Error("User logged in is not an applicant.");

  const { data: appliedJobs } = useAppliedJobs(applicant.id);

  console.log(appliedJobs);

  return (
    <div className="min-h-screen p-4 min-w-screen">
      <main className="max-w-[1440px] mx-auto my-4">
        <div className="flex flex-col my-6 space-y-2">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>
        </div>

        <MyApplicationsTable applications={appliedJobs ?? []} />
      </main>
    </div>
  );
}
