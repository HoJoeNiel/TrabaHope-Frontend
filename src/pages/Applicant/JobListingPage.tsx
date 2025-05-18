import Footer from "@/components/Footer";
import JobFilters from "@/components/JobListingPage/JobFilters";
import JobList from "@/components/JobListingPage/JobList";
import AIResumeMatchComponent from "@/components/JobListingPage/AIResumeMatchComponent";
import ResumeTipsCard from "@/components/JobListingPage/ResumeTipsCard";
import SavedJobsOverview from "@/components/JobListingPage/SavedJobsOverview";
import ApplicantHeader from "@/components/ApplicantHeader";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function JobListingPage() {
  const user = useLoggedInUserStore((state) => state.user);
  console.log(user);
  return (
    <div className="min-w-screen min-h-screen bg-blue-50">
      <ApplicantHeader />
      <main className="max-w-[1440px] mx-auto">
        <JobFilters />
        <div className="flex space-x-12 mt-4">
          <JobList />
          <div className="w-1/4 flex flex-col sticky top-2">
            <AIResumeMatchComponent />
            <ResumeTipsCard />
            <SavedJobsOverview />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
