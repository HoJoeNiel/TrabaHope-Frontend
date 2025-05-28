import { formatDate, getRelativeTimeAgo } from "@/helpers";
import { CompanyPostedJob } from "@/types";
import {
  Clock,
  Edit,
  Eye,
  MapPin,
  MoreVertical,
  Share,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import DeleteJobDialog from "../DeleteJobDialog";

type CompanyJobsCardProps = {
  job: CompanyPostedJob;
};

export default function CompanyJobCard({ job }: CompanyJobsCardProps) {
  const navigate = useNavigate();
  const {
    companyName,
    id,
    companyProfileUrl,
    description,
    employmentType,
    jobTitle,
    location,
    remote,
    salaryRange,
    tags,
    timestamps,
  } = job;
  const [showMenu, setShowMenu] = useState(false);

  const avatar = companyProfileUrl ?? companyName.charAt(0).toUpperCase();

  return (
    <div className="w-full pt-4 bg-white border rounded border-md">
      {/* header area */}
      <div className="flex justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-black rounded-md size-12">
            <span className="text-xl font-bold text-white">{avatar}</span>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-medium">{jobTitle}</h2>
            <span className="text-sm text-gray-600">{companyName}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge className="text-sm bg-green-400 hover:bg-green-400">
            Active
          </Badge>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <MoreVertical size={18} className="text-gray-500" />
            </button>

            {showMenu && (
              // TODOs: Function para sa mga buttons na to
              <div className="absolute right-0 z-50 w-48 mt-1 bg-white border border-gray-100 rounded-md shadow-lg animate-fadeIn">
                <div className="py-1">
                  <button
                    onClick={() => navigate(`/recruiter/job/${job.id}`)}
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  >
                    <Eye size={16} /> View Job
                  </button>
                  <button
                    onClick={() => navigate(`/recruiter/edit-job/${id}`)}
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  >
                    <Edit size={16} /> Edit Job
                  </button>
                  <DeleteJobDialog id={id} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* location area */}
      <div className="flex px-4 my-3 space-x-2 font-light text-gray-600">
        <MapPin />
        <span>{location}</span>
        {remote && (
          <Badge className="text-sm text-blue-700 bg-blue-200 hover:bg-blue-200">
            Remote
          </Badge>
        )}
        <Clock />
        <span>Posted {getRelativeTimeAgo(timestamps.posted)}</span>
      </div>

      <div className="flex px-4 my-3">
        <Users />
        {/* Hardcoded muna pero eto yung number ng applicants ng isang job */}
        <span>{14} applicants</span>
      </div>

      <div className="flex justify-between px-4 my-3">
        <div>
          <span className="block text-xs text-gray-600">Salary Range</span>
          <span className="block font-medium">{`₱${salaryRange.min} - ₱${salaryRange.min}`}</span>
        </div>

        <div>
          <span className="block text-xs text-gray-600"> Employment Type</span>
          <span className="block font-medium">{employmentType}</span>
        </div>

        <div>
          <span className="block text-xs text-gray-600">Last Updated</span>
          <span className="block font-medium">
            {formatDate(timestamps.posted)}
          </span>
          {/* Last updated field (kapag inedit ng recruiter) */}
        </div>
      </div>

      <div className="pt-3 px-4 border-t max-h-[100px] overflow-hidden">
        <p className="text-sm text-gray-700 text-start line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-start mx-auto px-4 my-3 gap-2 overflow-x-auto max-w-[95%] no-scrollbar whitespace-nowrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-sm hover:bg-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between p-3 bg-gray-100">
        <button className="flex px-4 py-2 space-x-2 font-medium text-blue-500 transition-colors bg-white border border-blue-400 rounded hover:bg-gray-50">
          <Eye />
          <span> View Applicants (14)</span>
        </button>
        {/* TODO: URL for sharing job publicly (tsaka na to) */}
        <button className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-blue-400 rounded hover:bg-blue-500">
          <Share />
          <span className="">Share Job Post</span>
        </button>
      </div>
    </div>
  );
}
