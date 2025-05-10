import { FaBookmark } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { useJobStore } from "@/stores/useJobStore";
import { getDaysAgo } from "@/helpers";

export default function SavedJobsStats() {
  const savedJobs = useJobStore((state) => state.savedJobs);
  const remoteJobs = savedJobs.filter((job) => job.remote).length;
  const within7daysAgo = savedJobs.filter(
    (job) => job.timestamps.posted && getDaysAgo(job.timestamps.posted) < 8
  ).length;
  const morethan90PercentMatched = savedJobs.filter(
    (job) => job.matchPercentage >= 90
  ).length;

  savedJobs.forEach((job) => console.log(job.timestamps.posted));
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Total Saved</h3>
          <h1 className="text-gray-700 text-3xl font-bold">
            {savedJobs.length}
          </h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-yellow-100 text-yellow-400 rounded-full">
          <FaBookmark className="size-7" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">90%+ Match</h3>
          <h1 className="text-gray-700 text-3xl font-bold">
            {morethan90PercentMatched}
          </h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-green-100 text-green-500 rounded-full">
          <FiCheckCircle className="size-7" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Remote Jobs</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{remoteJobs}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-purple-100 text-purple-500 rounded-full">
          <MdOutlineWorkOutline className="size-7" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Recent (7 days)</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{within7daysAgo}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-blue-100 text-blue-500 rounded-full">
          <CiClock1 className="size-7" />
        </div>
      </div>
    </div>
  );
}
