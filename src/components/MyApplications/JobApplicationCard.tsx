import { getStatusColor, getStatusIcon } from "@/helpers";
import { Job } from "@/types";
import { Calendar, MessageSquare, XCircle } from "lucide-react";

export default function JobApplicationCard({ job }: { job: Job }) {
  return (
    <div
      key={job.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
    >
      {/* job Header */}
      <div className="p-4 border-b border-gray-100 flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <div
            className={`size-16 rounded-md p-2 flex items-center justify-center bg-blue-100`}
          >
            <img
              src={job.companyProfile}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {job.jobTitle}
            </h3>
            <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
              <span>{job.companyName}</span>
              <span>•</span>
              <span>{job.location}</span>
              {job.remote && (
                <>
                  <span>•</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md text-xs">
                    Remote
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              job.status && getStatusColor(job.status)
            }`}
          >
            {job.status && getStatusIcon(job.status)}
            <span className="ml-1">{job.status}</span>
          </span>
          <div className="bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-xs flex items-center">
            <span className="font-semibold">{job.matchPercentage}%</span>
            <span className="ml-1">Match</span>
          </div>
        </div>
      </div>

      {/* job details */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 sm:mb-0">
            <div>
              <span className="font-medium">Applied:</span>{" "}
              {job.timestamps.applied}
            </div>
            <div>
              <span className="font-medium">Last update:</span>{" "}
              {job.timestamps.lastUpdate}
            </div>
          </div>

          {/* Status-specific information */}
          {job.status === "Interview" && (
            <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-md text-sm">
              <span className="font-medium">Next:</span> {job.nextStep}
            </div>
          )}
          {job.status === "Hired" && (
            <div className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-sm">
              {/* Rejection reason galing sa recruiter (sample lang muna habang wala pang totong data)*/}
              <span className="font-medium">Start date: April 26, 2025 </span>
            </div>
          )}
          {job.status === "Rejected" && (
            <div className="px-3 py-1 bg-red-50 text-red-600 rounded-md text-sm">
              {/* Rejection reason galing sa recruiter */}
              <span className="font-medium">
                Reason: Temporary sample reason
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 text-sm font-medium hover:bg-gray-50">
            View Details
          </button>

          {job.status === "Interview" && (
            <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-md text-sm font-medium hover:bg-emerald-200">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Prepare for Interview</span>
              </div>
            </button>
          )}

          {job.status === "Pending" && (
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-200">
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>Follow Up</span>
              </div>
            </button>
          )}

          {(job.status === "Pending" || job.status === "Review") && (
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-200">
              <div className="flex items-center">
                <XCircle className="mr-1 h-4 w-4" />
                <span>Withdraw</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
