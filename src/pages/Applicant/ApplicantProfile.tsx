import ApplicantProfileCard from "@/components/ApplicantProfile/ApplicantProfileCard";
import ApplicantSkillsAccordion from "@/components/ApplicantProfile/ApplicantSkillsAccordion";
import RecommendedCareerSection from "@/components/ApplicantProfile/RecommendedCareerSection";
import ResumeSection from "@/components/ApplicantProfile/ResumeSection";
import WorkExperienceAccordion from "@/components/ApplicantProfile/WorkExperienceAccordion";
import { isApplicant } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function ApplicantProfile() {
  const user = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(user)) {
    throw new Error("No authenticated user.");
  }

  console.log(user);

  return (
    <div className="flex flex-col min-h-screen p-4 min-w-screen">
      <main className="flex-1 w-full max-w-[1440px] mx-auto mt-4">
        <ApplicantProfileCard user={user} />
        <ResumeSection user={user} />
        <WorkExperienceAccordion user={user} />
        <ApplicantSkillsAccordion user={user} />
        <RecommendedCareerSection />
      </main>
    </div>
  );
}
