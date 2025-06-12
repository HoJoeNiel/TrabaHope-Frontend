import InterviewDetailsCard from "@/components/InterviewsPage/InterviewDetailsCard";
import Loading from "@/components/Loading";
import { isApplicant } from "@/helpers";
import { useApplicantInterviews } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import noInterviews from "@/assets/Schedule-bro (1).svg";

export default function ApplicantInterviews() {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  const { data: interviews, isPending } = useApplicantInterviews(applicant.id);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold text-white">Interviews</h1>
      {!isPending && interviews?.length === 0 && (
        <div className="flex flex-col w-full justify-center items-center h-[700px]">
          <img src={noInterviews} alt="No jobs found" className="w-[400px]" />
          <p className="text-lg text-gray-300">
            No jobs match your current filters, resume, or interests. Try
            adjusting your search to see more opportunities.
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-12 py-8 max-2xl:grid-cols-1">
        {isPending && <Loading />}
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
