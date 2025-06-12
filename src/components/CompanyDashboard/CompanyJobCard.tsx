import { formatDate, getRelativeTimeAgo, isRecruiter } from "@/helpers";
import { JobWithId } from "@/types";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Edit,
  Eye,
  MapPin,
  MoreVertical,
  Share2,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteJobDialog from "../DeleteJobDialog";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useCompanyApplications } from "@/services/queries";

type CompanyJobsCardProps = {
  job: JobWithId;
};

export default function CompanyJobCard({ job }: CompanyJobsCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const company = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(company))
    throw new Error("User logged in is not a recruiter account.");

  const { name } = company;

  const { data: applications } = useCompanyApplications(company.id);

  const specificApplications = applications?.filter(
    (a) => a.job.jobId === job.id
  );

  const {
    id,
    description,
    employmentType,
    title,
    location,
    remote,
    maxSalary,
    minSalary,
    tags,
    createdAt,
  } = job;

  return (
    <div className="p-8">
      <div className="w-full mx-auto ">
        <div className="overflow-hidden border bg-gray-800/50 backdrop-blur-xl rounded-2xl border-gray-700/50">
          {/* Header Section */}
          <div className="relative p-8 border-b bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-gray-700/50">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">{title}</h1>
                    <div className="px-3 py-1 text-sm font-medium text-green-400 border rounded-full bg-green-500/20 border-green-500/30">
                      Active
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-blue-400">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg font-medium">{name}</span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{location}</span>
                    </div>
                    {remote && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Remote</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{getRelativeTimeAgo(new Date(createdAt))}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-1 rounded-full hover:bg-gray-800/50"
                  >
                    <MoreVertical size={18} className="text-gray-500" />
                  </button>

                  {showMenu && (
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
          </div>

          {/* Stats Bar */}
          <div className="px-8 py-4 border-b bg-gray-800/30 border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">
                    {specificApplications?.length} applicants
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-gray-400">Salary Range:</span>
                    <span className="ml-2 font-medium text-white">
                      ₱{minSalary} - ₱{maxSalary}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Employment Type:</span>
                    <span className="ml-2 font-medium text-white">
                      {employmentType}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="ml-2 font-medium text-white">
                      {getRelativeTimeAgo(new Date(createdAt))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <div>
                  <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-white">
                    <Target className="w-5 h-5 text-blue-400" />
                    Job Description
                  </h2>
                  <div className="p-6 border bg-gray-700/30 rounded-xl border-gray-600/30">
                    <p className="leading-relaxed text-gray-300">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Required Skills */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-white">
                    Required Skills & Technologies
                  </h2>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-4 py-3 text-center border rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                      >
                        <span className="font-medium text-blue-300">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
                  <button
                    onClick={() =>
                      navigate(`/recruiter/job/${job.id}/applicants`)
                    }
                    className="flex items-center gap-2 px-6 py-3 text-white transition-colors border bg-gray-700/50 hover:bg-gray-700 rounded-xl border-gray-600/50"
                  >
                    <Eye className="w-4 h-4" />
                    View Applicants {applications?.length}
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-fuchsia-500/50 rounded-xl">
                    <Share2 className="w-4 h-4" />
                    Share Job Post
                  </button>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="p-6 border bg-gray-700/30 rounded-xl border-gray-600/30">
                  <h3 className="mb-4 font-semibold text-white">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20">
                        <DollarSign className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">
                          Salary Range
                        </div>
                        <div className="font-medium text-white">
                          ₱{minSalary} - ₱{maxSalary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/20">
                        <Briefcase className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">
                          Employment Type
                        </div>
                        <div className="font-medium text-white">Full-time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20">
                        <Calendar className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">
                          Last Updated
                        </div>
                        <div className="font-medium text-white">
                          {formatDate(new Date(job.createdAt))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Stats */}
                {/* TODO: Gawing dynamic to, gawin modular yung pag cocompute ng statistics para mareuse sa ibang component */}
                <div className="p-6 border bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 rounded-xl">
                  <h3 className="flex items-center gap-2 mb-4 font-semibold text-white">
                    <Users className="w-5 h-5 text-green-400" />
                    Application Statistics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Total Applications</span>
                      <span className="text-lg font-bold text-white">
                        {specificApplications?.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">This Week</span>
                      <span className="font-medium text-green-400">
                        +{specificApplications?.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Response Rate</span>
                      <span className="font-medium text-blue-400">100%</span>
                    </div>
                  </div>
                </div>

                {/* Status Card */}
                <div className="p-6 border bg-gray-700/30 rounded-xl border-gray-600/30">
                  <h3 className="mb-4 font-semibold text-white">Job Status</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="font-medium text-green-400">Active</div>
                      <div className="text-sm text-gray-400">
                        Accepting applications
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    This job posting is currently active and visible to
                    candidates. Applications are being accepted.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
