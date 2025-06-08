import JobFilters from "@/components/JobListingPage/JobFilters";
import JobList from "@/components/JobListingPage/JobList";
import AIResumeMatchComponent from "@/components/JobListingPage/AIResumeMatchComponent";
import ResumeTipsCard from "@/components/JobListingPage/ResumeTipsCard";
import SavedJobsOverview from "@/components/JobListingPage/SavedJobsOverview";
import { useState } from "react";

export default function JobListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<string>("");

  return (
    <div className="min-h-screen p-4 bg-gray-50 min-w-screen">
      <div className="flex flex-col my-6 space-y-2">
        <h1 className="text-2xl font-bold">Find Your Dream Job</h1>
        <p className="text-gray-600">
          Use AI-Powered matching to discover opportunities that fits your
          skills
        </p>
      </div>
      <main className="max-w-[1440px] mx-auto">
        <JobFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          location={location}
          setLocation={setLocation}
          salary={salary}
          setSalary={setSalary}
        />
        <div className="flex mt-4 space-x-12">
          <JobList
            searchQuery={searchQuery}
            salary={salary}
            location={location}
          />
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
