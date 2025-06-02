import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CompanyFetchedApplication } from "@/types";
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

type ApplicantsTableProps = {
  applications: CompanyFetchedApplication[];
};

export function ApplicantsTable({ applications }: ApplicantsTableProps) {
  type StatusType = "Pending" | "Interview" | "Hired" | "Rejected";

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
              { key: "pending", label: "Pending Review" },
              { key: "interview", label: "Interview Scheduled" },
              { key: "hired", label: "Hired" },
              { key: "rejected", label: "Rejected" },
              { key: "ai-score", label: "Sort by AI Score" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap`}
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
            <span className="block max-w-[500px] text-center text-xl">
              No applications received for this job yet. Check back later or
              promote your listing to attract applicants.
            </span>
          </div>
        )}
        <TableBody>
          {applications?.map((applicant) => (
            <TableRow className="w-full" key={applicant.id}>
              <TableCell className="flex items-start py-2">
                <div className="flex space-x-2">
                  {applicant.photoUrl ? (
                  <img
                      src={applicant.photoUrl}
                      className="border-2 border-white rounded-full size-12"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-800 rounded-full size-12">
                      <span className="text-lg font-semibold text-white">
                        {applicant.name
                          .split(" ")
                          .map((word) => word[0]?.toUpperCase())
                          .join("")}
                      </span>
                    </div>
                  )}

                  <div className="">
                    <span className="block font-medium text-gray-900">
                      {applicant.name}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="">
                  <span className="block text-gray-900">
                    {applicant.jobApplied.title}
                  </span>
                  <span className="block text-gray-700">
                    {applicant.jobApplied.employmentType}
                  </span>
                  <div className="flex justify-start gap-2 mx-auto my-3 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      {applications[0].jobApplied.tags[0]}
                    </span>
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      {applications[0].jobApplied.tags[1]}
                    </span>
                    <span className="inline-block px-4 py-1 text-xs text-gray-800 bg-gray-200 rounded-sm hover:bg-gray-300">
                      + {applications[0].jobApplied.tags.length - 2}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="size-4" />
                    <span className="font-medium text-gray-800">
                      {applicant.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="size-4" />
                    <span>{applicant.contactNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="size-4" />
                    <span>{applicant.location}</span>
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
                    {applicant.appliedDate.toLocaleString()}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 space-x-2 border rounded">
                    <Eye className="size-4" />
                    <span>View Resume</span>
                  </button>
                  <button className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 border rounded ">
                    <Check className="size-4" />
                    <span>Hire</span>
                  </button>
                  <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 border rounded">
                    <Calendar className="size-4" />
                    <span>Interview</span>
                  </button>
                  <button className="flex items-center px-4 py-2 space-x-2 text-white bg-red-500 border rounded">
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
