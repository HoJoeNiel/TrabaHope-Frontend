import ApplicantHeader from "@/components/ApplicantHeader";
import Footer from "@/components/Footer";
import FilterSection from "@/components/SavedJobsPage/FilterSection";
import SavedJobsCard from "@/components/SavedJobsPage/SavedJobsCard";
import SavedJobsStats from "@/components/SavedJobsPage/SavedJobsStats";
import { useJobStore } from "@/stores/useJobStore";

export default function SavedJobsPage() {
  const savedJobs = useJobStore((state) => state.savedJobs);
  
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-blue-50">
      <ApplicantHeader />

      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col space-y-2 my-6">
          <h1 className="text-2xl font-bold">Saved Jobs</h1>
          <p className="text-gray-600">
            Jobs you've saved for later. Apply when you're ready.
          </p>
        </div>

        <FilterSection />
        <SavedJobsStats />

        {savedJobs.map((job) => (
          <SavedJobsCard key={job.id} job={job} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
