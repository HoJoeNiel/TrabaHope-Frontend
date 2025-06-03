import { getRelativeTimeAgo } from "@/helpers";
import { CompanyFetchedApplication } from "@/types";
import {
  Clock,
  Eye,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Star,
} from "lucide-react";

export default function RecentApplications({
  application,
}: {
  application: CompanyFetchedApplication;
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "interview":
        return "bg-blue-100 text-blue-800";
      case "hired":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "interview":
        return "Interview";
      case "hired":
        return "Hired";
      case "rejected":
        return "Rejected";
      default:
        return status;
    }
  };

  return (
    <div
      key={application.applicantId}
      className="p-6 transition-colors hover:bg-gray-50"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          {application.photoUrl ? (
            <img
              src={application.photoUrl}
              className="overflow-hidden rounded-full size-12"
              alt="applicant profile picture"
            />
          ) : (
            <div className="bg-black size-12">
              {" "}
              {application.name
                .split(" ")
                .map((word) => word[0]?.toUpperCase())
                .join("")}
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-900">
                {application.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-mdll text-xs font-medium ${getStatusColor(
                  application.status
                )}`}
              >
                {getStatusText(application.status)}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{application.title}</p>
            <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                {application.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                {application.contactNumber}
              </div>
            </div>
            <div className="flex items-center mt-1 space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {application.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {getRelativeTimeAgo(application.appliedDate)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">
                92%
                {/* {application.score} wala pang AI score */}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-2 text-gray-400 rounded-md hover:text-gray-600 hover:bg-gray-100">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 rounded-md hover:text-gray-600 hover:bg-gray-100">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
