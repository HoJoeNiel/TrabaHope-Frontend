import { useJobStore } from "@/stores/useJobStore";
import { FaBookmark } from "react-icons/fa";

type Props = {
  className: string;
};

export default function SavedJobsOverview({ className }: Props) {
  const savedJobs = useJobStore((state) => state.savedJobs);
  const lastThreeItems = savedJobs?.slice(-3).reverse();

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-sky-100 h-10 w-10 rounded-full flex items-center justify-center text-sky-600">
            <FaBookmark />
          </div>
          <h2 className="font-bold text-lg">Saved Jobs</h2>
        </div>
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
          {savedJobs.length}
        </span>
      </div>

      <div className="space-y-4">
        {savedJobs.length === 0 && (
          <>
            <p>You haven't saved any jobs yet.</p>
            <p>Tap the bookmark icon to start saving opportunities you like!</p>
          </>
        )}
        {lastThreeItems?.map((sj) => (
          <div className="pb-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">{sj.jobTitle}</h3>
            <p className="text-sm text-sky-600">{sj.companyName}</p>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">{sj.postedDate}</span>
              <button className="text-sky-600 hover:text-sky-800 text-sm">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-sky-600 hover:text-sky-800 text-sm">
        View All Saved Jobs
      </button>
    </div>
  );
}
