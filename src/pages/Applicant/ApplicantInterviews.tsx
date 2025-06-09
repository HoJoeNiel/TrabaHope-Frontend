import InterviewDetailsCard from "@/components/InterviewsPage/InterviewDetailsCard";
import { isApplicant } from "@/helpers";
import { useApplicantInterviews } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function ApplicantInterviews() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  const {
    data: interviews,
    isPending,
    isError,
  } = useApplicantInterviews(applicant.id);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Interviews</h1>
      <div className="grid grid-cols-2 gap-12 py-8 max-2xl:grid-cols-1">
        {interviews &&
          interviews.map((interview) => (
            <InterviewDetailsCard
              key={`${interview.applicant.id}-${interview.jobId}`}
              interview={interview}
            />
          ))}
      </div>
    </div>
  );
}
