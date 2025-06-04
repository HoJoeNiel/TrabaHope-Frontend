import JobFilters from "@/components/JobListingPage/JobFilters";
import JobList from "@/components/JobListingPage/JobList";
import AIResumeMatchComponent from "@/components/JobListingPage/AIResumeMatchComponent";
import ResumeTipsCard from "@/components/JobListingPage/ResumeTipsCard";
import SavedJobsOverview from "@/components/JobListingPage/SavedJobsOverview";

export default function JobListingPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 min-w-screen">
      <main className="max-w-[1440px] mx-auto">
        <JobFilters />
        <div className="flex mt-4 space-x-12">
          <JobList />
          <div className="sticky flex flex-col w-1/4 top-2">  
            <AIResumeMatchComponent />
            <ResumeTipsCard />
            <SavedJobsOverview />
          </div>
        </div>
      </main>
    </div>
  );
}
