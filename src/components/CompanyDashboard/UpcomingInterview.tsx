import { Interview } from "@/types";
import { Calendar, ChevronRight, MoreHorizontal } from "lucide-react";

export default function UpcomingInterview({
  interviews,
}: {
  interviews: Interview[];
}) {
  return (
    <div className="self-start mt-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Upcoming Interviews
        </h2>
      </div>

      <div className="divide-y divide-gray-200 ">
        {interviews.map((interview) => (
          <div key={interview.applicant.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {interview.applicant.name}
                </h3>
                <p className="mt-1 text-xs text-gray-600">
                  {interview.applicant.title}
                </p>
                <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {interview.date.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center mt-1 space-x-2">
                  <span className="text-xs text-gray-500">
                    {interview.type}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">
                    with {interview.interviewer.name}
                  </span>
                </div>
              </div>
              <button className="p-1 text-gray-400 rounded mdver:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-gray-200">
        <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
          View all interviews
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
