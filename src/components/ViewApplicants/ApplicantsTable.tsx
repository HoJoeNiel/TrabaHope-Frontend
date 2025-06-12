import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { isRecruiter } from "@/helpers";
import { useModifyApplicationStatus } from "@/services/mutations";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import { Application, ApplicationData } from "@/types";
import {
  ArrowRight,
  Check,
  Clock,
  Eye,
  Mail,
  MapPin,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import SetInterviewModal from "./SetInterviewModal";

type StatusType = "Pending" | "Interview" | "Hired" | "Rejected";
type ApplicantsTableProps = {
  applications: Application[];
};

export function ApplicantsTable({ applications }: ApplicantsTableProps) {
  const user = useLoggedInUserStore((state) => state.user);

  if (!user || !isRecruiter(user)) {
    throw new Error("User is not recruiter.");
  }

  const { mutate: modifyStatus } = useModifyApplicationStatus();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

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

    modifyStatus(updatedApplication);
  };

  const getStatusBadge = (status: StatusType) => {
    const statusConfig: Record<
      StatusType,
      { bg: string; text: string; label: string; border: string }
    > = {
      Pending: {
        bg: "bg-yellow-500/50",
        text: "text-yellow-400",
        label: "Pending",
        border: "border-yellow-500/30",
      },
      Interview: {
        bg: "bg-blue-500/50",
        text: "text-blue-400",
        label: "Interview",
        border: "border-blue-500/30",
      },
      Hired: {
        bg: "bg-green-500/50",
        text: "text-green-400",
        label: "Hired",
        border: "border-green-500/30",
      },
      Rejected: {
        bg: "bg-red-500/50",
        text: "text-red-400",
        label: "Rejected",
        border: "border-red-500/30",
      },
    };

    const config = statusConfig[status] ?? statusConfig["Pending"]; // fallback just in case

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-medium ${config.bg} ${config.text} ${config.border}`}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-w-[1900px]">
      <div className="p-2 my-6 border shadow-sm rounded-xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
        <div className="p-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute w-4 h-4 text-gray-600 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search applicants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 py-2 pl-10 pr-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
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
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  selectedTab === tab.key
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-200 hover:border-gray-300"
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
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-gray-100 min-w-[200px]">
              APPLICANT
            </TableHead>
            <TableHead className="text-gray-100 min-w-[200px]">
              APPLIED FOR
            </TableHead>
            <TableHead className="text-gray-100 min-w-[250px]">
              CONTACT INFO
            </TableHead>
            <TableHead className="text-gray-100 min-w-[100px]">
              AI Score
            </TableHead>
            <TableHead className="text-gray-100 min-w-[100px]">
              EXPERIENCE
            </TableHead>
            <TableHead className="text-gray-100 min-w-[100px]">
              STATUS
            </TableHead>
            <TableHead className="text-gray-100 min-w-[100px]">
              APPLIED DATE
            </TableHead>
            <TableHead className="text-gray-100 min-w-[600px]">
              ACTIONS
            </TableHead>
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
            <TableRow
              className="w-full hover:bg-gray-800/70"
              key={applicant.applicant.applicantId}
            >
              <TableCell className="flex items-start py-2">
                <div className="flex space-x-2">
                  {applicant.applicant.photoUrl ? (
                    <img
                      src={applicant.applicant.photoUrl}
                      className="border-2 border-white rounded-full size-12"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-600 rounded-full size-12">
                      <span className="text-lg font-semibold text-white">
                        {applicant.applicant.name
                          .split(" ")
                          .map((word) => word[0]?.toUpperCase())
                          .join("")}
                      </span>
                    </div>
                  )}

                  <div className="">
                    <span className="block font-medium text-gray-100">
                      {applicant.applicant.name}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="">
                  <span className="block text-gray-200">
                    {applicant.job.title}
                  </span>
                  <span className="block text-gray-400">
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
                <div className="flex flex-col space-y-2 text-sm text-gray-200">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-gray-400 size-4" />
                    <span className="font-medium text-gray-300">
                      {applicant.applicant.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-gray-400 size-4" />
                    <span>{applicant.applicant.contactNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-gray-400 size-4 " />
                    <span>
                      {applicant.applicant.location ?? "Not provided"}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {/* Communicate sa backend api para maget yung score ng applicant */}
                {/* Loading spinner muna habang wala pa yung score */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 border bg-green-500/20 border-green-500/30`}
                >
                  92%
                </span>
              </TableCell>

              <TableCell>
                <a className="flex items-center space-x-2 text-blue-400 hover:text-blue-500">
                  <span>View Portfolio</span>
                  <ArrowRight className="size-4" />
                </a>
              </TableCell>

              <TableCell>
                {getStatusBadge(applicant.status as StatusType)}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Clock className="text-gray-200 size-4" />
                  <span className="text-gray-200">
                    {new Date(applicant.appliedAt).toLocaleString()}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      window.open(applicant.applicant.resumeFile, "_blank")
                    }
                    className="flex items-center px-4 py-2 space-x-2 text-gray-200 bg-gray-700 rounded"
                  >
                    <Eye className="size-4" />
                    <span>View Resume</span>
                  </button>

                  {applicant.status !== "Hired" &&
                    applicant.status !== "Rejected" && (
                      <>
                        <button
                          onClick={() => handleModifyStatus(applicant, "Hired")}
                          className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 rounded "
                        >
                          <Check className="size-4" />
                          <span>Hire</span>
                        </button>

                        {applicant.status !== "Interview" && (
                          <SetInterviewModal
                            applicant={applicant}
                            onClick={() =>
                              handleModifyStatus(applicant, "Interview")
                            }
                          />
                        )}

                        <button
                          onClick={() =>
                            handleModifyStatus(applicant, "Rejected")
                          }
                          className="flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded"
                        >
                          <X className="size-4" />
                          <span>Reject</span>
                        </button>
                      </>
                    )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
