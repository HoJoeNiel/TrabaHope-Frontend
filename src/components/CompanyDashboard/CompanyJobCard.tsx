import { formatDate, getRelativeTimeAgo } from "@/helpers";
import { CompanyPostedJob } from "@/types";
import {
  Clock,
  EllipsisVertical,
  Eye,
  MapPin,
  Share,
  Users,
} from "lucide-react";

type CompanyJobsCardProps = {
  job: CompanyPostedJob;
};

export default function CompanyJobCard({ job }: CompanyJobsCardProps) {
  const {
    companyName,
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

        <div className="flex items-center space-x-2">
          <span className="block px-2 font-medium text-green-700 bg-green-200 rounded-full">
            Active
          </span>
          <button onClick={() => console.log("menu rito")}>
            <EllipsisVertical size={18} />
          </button>
        </div>
      </div>

      {/* location area */}
      <div className="flex px-4 my-3 space-x-2 font-light text-gray-600">
        <MapPin />
        <span>{location}</span>
        {remote && (
          <span className="block px-2 font-medium text-blue-700 bg-blue-200 rounded-full">
            Remote
          </span>
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
          <span className="block font-medium">{salaryRange}</span>
        </div>

        <div>
          <span className="block text-xs text-gray-600">Employment Type</span>
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

      <div className="flex px-4 my-3 space-x-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="block px-3 text-sm text-gray-700 bg-gray-100 rounded-sm hover:bg-gray-200"
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
