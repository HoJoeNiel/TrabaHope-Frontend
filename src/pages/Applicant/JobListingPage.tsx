import JobFilters from "@/components/JobListingPage/JobFilters";
import JobList from "@/components/JobListingPage/JobList";
import AIResumeMatchComponent from "@/components/JobListingPage/AIResumeMatchComponent";
import ResumeTipsCard from "@/components/JobListingPage/ResumeTipsCard";
import SavedJobsOverview from "@/components/JobListingPage/SavedJobsOverview";
import { useState } from "react";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { isApplicant } from "@/helpers";
import completeProfileHero from "@/assets/Profile Interface-bro.svg";

export default function JobListingPage() {
  const user = useLoggedInUserStore((state) => state.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<string>("");
  const [minSalary, setMinSalary] = useState<number>();
  const [maxSalary, setMaxSalary] = useState<number>();

  if (!isApplicant(user)) throw new Error("User is not an applicant.");

  let isProfileComplete = true;

  if (
    !user.jobTitle ||
    !user.resumeFile ||
    !user.description ||
    !user.location ||
    !user.name ||
    !user.interest
  ) {
    isProfileComplete = false;
  }

  return (
    <div className="min-h-screen p-4 min-w-screen">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-100">
          Find Your Dream Job
        </h1>
        <p className="text-gray-300">
          Use AI-Powered matching to discover opportunities that fits your
          skills
        </p>
      </div>
      <main className="my-4">
        {isProfileComplete ? (
          <>
            <JobFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              location={location}
              setLocation={setLocation}
              minSalary={minSalary}
              setMinSalary={setMinSalary}
              maxSalary={maxSalary}
              setMaxSalary={setMaxSalary}
            />
            <div className="flex mt-4 space-x-12">
              <JobList
                searchQuery={searchQuery}
                minSalary={minSalary}
                maxSalary={maxSalary}
                location={location}
              />
              <div className="sticky flex flex-col w-1/4 top-2">
                <AIResumeMatchComponent />
                <ResumeTipsCard />
                <SavedJobsOverview />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col w-full min-h-[400px] md:min-h-[500px] lg:h-[700px] justify-center items-center p-4 lg:p-8">
            <img
              src={completeProfileHero}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
              alt="Complete your profile illustration"
            />
            <p className="text-base sm:text-lg text-center text-gray-200 w-full sm:w-[90%] md:w-[80%] lg:w-[700px] mt-4 sm:mt-6 md:mt-8">
              To start applying for jobs, please complete your profile. Make
              sure you've filled in all required details and uploaded your
              resume so employers can properly review your qualifications.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
