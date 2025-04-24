import { FaBookmark } from "react-icons/fa";

export default function SavedJobsOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-sky-100 h-10 w-10 rounded-full flex items-center justify-center text-sky-600">
            <FaBookmark />
          </div>
          <h2 className="font-bold text-lg">Saved Jobs</h2>
        </div>
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
          3
        </span>
      </div>

      <div className="space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h3 className="font-medium text-gray-800">Senior React Developer</h3>
          <p className="text-sm text-sky-600">GlobalTech</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Saved 2 days ago</span>
            <button className="text-sky-600 hover:text-sky-800 text-sm">
              Apply
            </button>
          </div>
        </div>
        <div className="pb-3 border-b border-gray-100">
          <h3 className="font-medium text-gray-800">Product Designer</h3>
          <p className="text-sm text-sky-600">Creative Solutions</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Saved 1 week ago</span>
            <button className="text-sky-600 hover:text-sky-800 text-sm">
              Apply
            </button>
          </div>
        </div>
        <div className="pb-3">
          <h3 className="font-medium text-gray-800">Frontend Team Lead</h3>
          <p className="text-sm text-sky-600">Startup Inc</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Saved 2 weeks ago</span>
            <button className="text-sky-600 hover:text-sky-800 text-sm">
              Apply
            </button>
          </div>
        </div>
      </div>

      <button className="mt-4 text-sky-600 hover:text-sky-800 text-sm">
        View All Saved Jobs
      </button>
    </div>
  );
}
