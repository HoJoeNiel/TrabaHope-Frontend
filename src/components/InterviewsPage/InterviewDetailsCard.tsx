import {
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  User,
  Video,
} from "lucide-react";

import { getStatusColor, getStatusIcon, isApplicant } from "@/helpers";
import { useModifyInterview } from "@/services/mutations";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { Interview, InterviewData } from "@/types";

import SetInterviewModal from "../ViewApplicants/SetInterviewModal";

export default function InterviewDetailsCard({
  interview,
}: {
  interview: Interview;
}) {
  const user = useLoggedInUserStore((state) => state.user);

  const isUserApplicant = isApplicant(user);

  const {
    applicant,
    date,
    duration,
    interviewer,
    location,
    status,
    time,
    jobId,
    type,
  } = interview;

  const { mutate: modifyInterview } = useModifyInterview();

  const handleModifyInterview = (status: string) => {
    const modified: InterviewData = {
      applicantId: applicant.id,
      jobId,
      interviewerName: interviewer.name,
      interviewerTitle: interviewer.title,
      status,
      duration,
      date,
      time,
      type,
      location,
    };

    modifyInterview(modified);
  };

  return (
    <div
      key={interview.applicant.id}
      className="p-6 transition-all border bg-gray-800/50 backdrop-blur-xl rounded-2xl border-gray-700/50 hover:bg-gray-800/70 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-white">
                {interview.applicant.name}
              </h3>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(
                  interview.status
                )}`}
              >
                {getStatusIcon(status)}
                {status}
              </div>
            </div>
            <p className="mb-2 text-gray-400">{interview.applicant.title}</p>
          </div>
        </div>
        {!isUserApplicant && (
          <div className="flex items-center gap-2">
            <SetInterviewModal
              isEditing
              applicationData={{
                applicantId: applicant.id,
                jobId,
                interviewerName: interviewer.name,
                interviewerTitle: interviewer.title,
                status,
                duration,
                date,
                time,
                type,
                location,
              }}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Interview Details */}
        <div>
          <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
            <Calendar className="w-4 h-4 text-blue-400" />
            Interview Details
          </h4>
          <div className="p-4 space-y-3 bg-gray-700/30 rounded-xl">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="mb-1 text-xs tracking-wide text-gray-400 uppercase">
                  Date
                </div>
                <div className="font-medium text-white">{interview.date}</div>
              </div>
              <div>
                <div className="mb-1 text-xs tracking-wide text-gray-400 uppercase">
                  Time
                </div>
                <div className="font-medium text-white">{interview.time}</div>
              </div>
              <div>
                <div className="mb-1 text-xs tracking-wide text-gray-400 uppercase">
                  Duration
                </div>
                <div className="font-medium text-white">
                  {interview.duration}
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs tracking-wide text-gray-400 uppercase">
                Type
              </div>
              <div className="flex items-center gap-2">
                {interview.type === "Video Call" ? (
                  <Video className="w-4 h-4 text-blue-400" />
                ) : (
                  <MapPin className="w-4 h-4 text-green-400" />
                )}
                <span className="font-medium text-white">{interview.type}</span>
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs tracking-wide text-gray-400 uppercase">
                Location
              </div>
              <div className="text-white">{interview.location}</div>
            </div>
          </div>
        </div>

        {/* Contact & Interviewer Info */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div>
            <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
              <User className="w-4 h-4 text-green-400" />
              Contact Information
            </h4>
            <div className="p-4 space-y-3 bg-gray-700/30 rounded-xl">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 transition-colors cursor-pointer hover:text-blue-300">
                  {interview.applicant.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-white">
                  {interview.applicant.contactNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Interviewer */}
          <div>
            <h4 className="mb-4 font-medium text-white">Interviewer</h4>
            <div className="p-4 bg-gray-700/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                  <span className="text-xl font-semibold text-white">
                    {interview.applicant.name
                      .split(" ")
                      .map((word) => word[0]?.toUpperCase())
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white">
                    {interview.interviewer.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {interview.interviewer.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-700/50">
        {isUserApplicant ? (
          <>
            <button
              onClick={() => handleModifyInterview("Declined")}
              className="px-4 py-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-gray-700/50"
            >
              Decline
            </button>
            <button
              onClick={() => handleModifyInterview("Confirmed")}
              className="px-4 py-2 text-green-400 transition-colors border rounded-lg bg-green-500/20 hover:bg-green-500/30 border-green-500/30"
            >
              Confirm
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleModifyInterview("Rescheduled")}
              className="px-4 py-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-gray-700/50"
            >
              Reschedule
            </button>
            {interview.type === "Video Call" && (
              <button className="flex items-center gap-2 px-4 py-2 text-blue-400 transition-colors border rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30">
                <ExternalLink className="w-4 h-4" />
                Join Call
              </button>
            )}
            <button
              onClick={() => handleModifyInterview("Cancelled")}
              className="px-4 py-2 text-red-400 transition-colors border rounded-lg bg-red-500/20 hover:bg-red-500/30 border-red-500/30"
            >
              Cancel Interview
            </button>
          </>
        )}
      </div>
    </div>
  );
}
