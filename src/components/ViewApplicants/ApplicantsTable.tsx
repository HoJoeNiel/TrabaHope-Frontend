import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { isRecruiter } from "@/helpers";
import { fetchApplications, modifyApplicationStatus } from "@/services/api";
import { useApplicationsStore } from "@/stores/useApplicationsStore";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import { Application, ApplicationData } from "@/types";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Eye,
  Filter,
  Mail,
  MapPin,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type StatusType = "Pending" | "Interview" | "Hired" | "Rejected";
type ApplicantsTableProps = {
  applications: Application[];
};

export function ApplicantsTable({ applications }: ApplicantsTableProps) {
  const recruiter = useLoggedInUserStore((state) => state.user);
  const setApplications = useApplicationsStore(
    (state) => state.setApplications
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  if (!isRecruiter(recruiter)) throw new Error("User is not a recruiter.");

  useEffect(() => {
    fetchApplications(recruiter.id).then((applications) => {
      console.log(applications);
      setApplications(applications);
    });
  }, [recruiter.id, setApplications]);

  const filteredApplicants = applications.filter((application) => {
    const matchesTab =
      selectedTab === "all" || application.status === selectedTab;
    const matchesSearch =
      application.applicant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      application.job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      application.applicant.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleModifyStatus = async (
    application: Application,
    status: string
  ) => {
    const updatedApplication: ApplicationData = {
      jobId: String(application.job.jobId),
      companyId: application.companyId,
      applicantId: application.applicant.applicantId,
      status,
      appliedAt: application.appliedAt,
      feedback: application.feedback,
    };

    modifyApplicationStatus(updatedApplication);
  };

  const getStatusBadge = (status: StatusType) => {
    const statusConfig: Record<
      StatusType,
      { bg: string; text: string; label: string }
    > = {
      Pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Pending",
      },
      Interview: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Interview",
      },
      Hired: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Hired",
      },
      Rejected: {
        bg: "bg-red-100",
        text: "text-red-800",
        label: "Rejected",
      },
    };

    const config = statusConfig[status] ?? statusConfig["Pending"]; // fallback just in case

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-w-[1900px]">
      <div className="my-6 bg-white border border-gray-200 rounded shadow-sm">
        <div className="p-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search applicants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button className="flex items-center px-4 py-2 space-x-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Export:</span>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                CSV
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                PDF
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <nav className="flex px-6 -mb-px space-x-8">
            {[
              { key: "all", label: "All Applications" },
              { key: "Pending", label: "Pending Review" },
              { key: "Interview", label: "Interview Scheduled" },
              { key: "Hired", label: "Hired" },
              { key: "Rejected", label: "Rejected" },
              { key: "AI-score", label: "Sort by AI Score" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  selectedTab === tab.key
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 py-0.5 px-2 rounded-full text-xs`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">APPLICANT</TableHead>
            <TableHead className="min-w-[200px]">APPLIED FOR</TableHead>
            <TableHead className="min-w-[250px]">CONTACT INFO</TableHead>
            <TableHead className="min-w-[100px]">AI Score</TableHead>
            <TableHead className="min-w-[100px]">EXPERIENCE</TableHead>
            <TableHead className="min-w-[100px]">STATUS</TableHead>
            <TableHead className="min-w-[100px]">APPLIED DATE</TableHead>
            <TableHead className="min-w-[600px]">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        {applications?.length === 0 && (
          <div className="w-[1200px] h-[600px] flex justify-center items-center">
            <span className="block max-w-[500px] text-gray-500 text-center text-xl">
              No applications received for this job yet. Check back later or
              promote your listing to attract applicants.
            </span>
          </div>
        )}
        <TableBody>
          {filteredApplicants?.map((applicant) => (
            <TableRow className="w-full" key={applicant.applicant.applicantId}>
              <TableCell className="flex items-start py-2">
                <div className="flex space-x-2">
                  {applicant.applicant.photoUrl ? (
                    <img
                      src={applicant.applicant.photoUrl}
                      className="border-2 border-white rounded-full size-12"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-800 rounded-full size-12">
                      <span className="text-lg font-semibold text-white">
                        {applicant.applicant.name
                          .split(" ")
                          .map((word) => word[0]?.toUpperCase())
                          .join("")}
                      </span>
                    </div>
                  )}

                  <div className="">
                    <span className="block font-medium text-gray-900">
                      {applicant.applicant.name}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="">
                  <span className="block text-gray-900">
                    {applicant.job.title}
                  </span>
                  <span className="block text-gray-700">
                    {applicant.job.employmentType}
                  </span>
                  <div className="flex justify-start gap-2 mx-auto my-3 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      {applications[0].job?.tags?.[0]}
                    </span>
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      {applications[0].job?.tags?.[1]}
                    </span>
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      {/* 2 dahil possible na undefined daw sya, para pag mininus sa 2, 0 nalang kalabasan. Fix later */}
                      + {(applications[0].job.tags?.length ?? 2) - 2}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="size-4" />
                    <span className="font-medium text-gray-800">
                      {applicant.applicant.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="size-4" />
                    <span>{applicant.applicant.contactNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="size-4" />
                    <span>{applicant.applicant.location}</span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {/* Communicate sa backend api para maget yung score ng applicant */}
                {/* Loading spinner muna habang wala pa yung score */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800`}
                >
                  92%
                </span>
              </TableCell>

              <TableCell>
                <button className="flex items-center space-x-2 text-blue-700 hover:text-indigo-700">
                  <span>View Portfolio</span>
                  <ArrowRight className="size-4" />
                </button>
              </TableCell>

              <TableCell>
                {getStatusBadge(applicant.status as StatusType)}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Clock className="text-gray-600 size-4" />
                  <span className="text-gray-600">
                    {new Date(applicant.appliedAt).toLocaleString()}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex space-x-4">
                  <button
                    // TODO: Implement feature.
                    onClick={() =>
                      console.log(
                        "Redirect recruiter sa link para maview yung pdf resume ng applicant na yun."
                      )
                    }
                    className="flex items-center px-4 py-2 space-x-2 border rounded"
                  >
                    <Eye className="size-4" />
                    <span>View Resume</span>
                  </button>
                  <button
                    onClick={() => handleModifyStatus(applicant, "Hired")}
                    className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 border rounded "
                  >
                    <Check className="size-4" />
                    <span>Hire</span>
                  </button>
                  <button
                    // TODO: Dialog form para sa pag seset ng mga interview details. Yung laman ng form is seset sa backend para sa Interview.
                    onClick={() => handleModifyStatus(applicant, "Interview")}
                    className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 border rounded"
                  >
                    <Calendar className="size-4" />
                    <span>Interview</span>
                  </button>
                  <button
                    onClick={() => handleModifyStatus(applicant, "Rejected")}
                    className="flex items-center px-4 py-2 space-x-2 text-white bg-red-500 border rounded"
                  >
                    <X className="size-4" />
                    <span>Reject</span>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
