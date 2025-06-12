import noApplicationsHero from "@/assets/Resume folder-bro.svg";
import { MyApplicationsTable } from "@/components/MyApplications/MyApplicationsTable";
import { isApplicant } from "@/helpers";
import { useAppliedJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function MyApplications() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant))
    throw new Error("User logged in is not an applicant.");

  const { data: appliedJobs } = useAppliedJobs(applicant.id);

  return (
    <div className="min-h-screen p-4 min-w-screen">
      <main className="">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold text-white">My Applications</h1>
          <p className="text-gray-300">
            Track and manage your job applications
          </p>
        </div>
        {!appliedJobs && (
          <div className="flex flex-col w-full justify-center items-center h-[700px]">
            <img
              src={noApplicationsHero}
              alt="No Application Hero"
              className="w-[500px]"
            />
            <p className="text-lg text-gray-300">
              You haven’t applied to any jobs yet. Start exploring opportunities
              that match your skills and interests!
            </p>
          </div>
        )}
        {appliedJobs && <MyApplicationsTable applications={appliedJobs} />}
      </main>
    </div>
  );
}
