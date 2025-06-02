import InterviewDetailsCard from "@/components/InterviewsPage/InterviewDetailsCard";
import { useInterviewsStore } from "@/stores/useInterviewsStore";

export default function Interviews() {
  const interviews = useInterviewsStore((state) => state.interviews);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Interviews</h1>
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
