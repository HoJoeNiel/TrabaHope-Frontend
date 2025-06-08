import Loading from "@/components/Loading";
import { ApplicantsTable } from "@/components/ViewApplicants/ApplicantsTable";
import { isRecruiter } from "@/helpers";
import { useCompanyApplications } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function JobApplicantsPage() {
  const recruiter = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter || !recruiter) {
    throw new Error("User is not a recruiter.");
  }

  const {
    data: applications,
    isPending,
    isError,
  } = useCompanyApplications(recruiter.id);

  console.log(applications);

  let fallback;

  if (isPending) {
    fallback = <Loading />;
  }
  if (isError) {
    fallback = (
      <div className="flex items-center justify-center flex-1">
        <span>An error occured.</span>
      </div>
    );
  } // temporary lang

  if (!applications?.length) {
    fallback = (
      <div className="flex items-center justify-center flex-1">
        <span>No applications yet.</span>
      </div>
    );
  }
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Applications</h1>
      {/* <ApplicantsTable applications={applications} /> */}
      {fallback ?? <ApplicantsTable applications={applications ?? []} />}
    </div>
  );
}
