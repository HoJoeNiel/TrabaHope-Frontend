import { getRelativeTimeAgo, getStatusColor, getStatusIcon } from "@/helpers";
import { Application } from "@/types";
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
  application: Application;
}) {
  

  return (
    <div className="p-6 transition-colors hover:bg-gray-700/50">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-300">
                {application.applicant.name}
              </h3>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(
                  application.status
                )}`}
              >
                {getStatusIcon(application.status)}
                {application.status}
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-400">
              {application.applicant.title}
            </p>
            <div className="flex items-center mt-2 space-x-4 text-xs text-gray-300">
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                {application.applicant.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                {application.applicant.email}
              </div>
            </div>
            <div className="flex items-center mt-1 space-x-4 text-xs text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {application.applicant.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {getRelativeTimeAgo(application.appliedAt)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-green-400" />
              <span className="text-sm font-medium text-green-400">
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
