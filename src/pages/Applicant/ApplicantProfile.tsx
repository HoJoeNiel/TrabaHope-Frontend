import ApplicantHeader from "@/components/ApplicantHeader";
import ApplicantProfileCard from "@/components/ApplicantProfile/ApplicantProfileCard";
import ApplicantSkillsAccordion from "@/components/ApplicantProfile/ApplicantSkillsAccordion";
import ApplicationAnalytics from "@/components/ApplicantProfile/ApplicationAnalytics";
import ProfileCompleteness from "@/components/ApplicantProfile/ProfileCompleteness";
import RecommendedCareerSection from "@/components/ApplicantProfile/RecommendedCareerSection";
import ResumeSection from "@/components/ApplicantProfile/ResumeSection";
import WorkExperienceAccordion from "@/components/ApplicantProfile/WorkExperienceAccordion";
import Footer from "@/components/Footer";
import SavedJobsOverview from "@/components/JobListingPage/SavedJobsOverview";

export default function ApplicantProfile() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-gray-100">
      <ApplicantHeader />
      <main className="flex-1 bg-gray-100 w-full max-w-[1440px] mx-auto mt-4">
        <ApplicantProfileCard />
        <ProfileCompleteness />
        <ResumeSection />
        <WorkExperienceAccordion />
        <ApplicantSkillsAccordion />
        <RecommendedCareerSection />
        <ApplicationAnalytics />
        <SavedJobsOverview className="my-8" />
      </main>
      <Footer />
    </div>
  );
}
