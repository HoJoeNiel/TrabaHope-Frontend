import InterviewDetailsCard from "@/components/InterviewsPage/InterviewDetailsCard";
import { isRecruiter } from "@/helpers";
import { useCompanyInterviews } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function Interviews() {
  const company = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(company)) throw new Error("User is not a recruiter.");

  const { data: interviews } = useCompanyInterviews(company.id);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold text-white">Interviews</h1>

      <div className="grid grid-cols-2 gap-12 py-8 max-2xl:grid-cols-1">
        {interviews &&
          interviews.map((interview) => (
            <InterviewDetailsCard
              key={interview.applicant.id}
              interview={interview}
            />
          ))}
      </div>
    </div>
  );
}
