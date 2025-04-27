import { useState } from "react";
import ApplicantHeader from "@/components/ApplicantHeader";

import {
  BarChart2,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  MessageSquare,
  XCircle,
} from "lucide-react";

import { CiClock1 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function MyApplications() {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const applications = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Salcedo Village, Makati City",
      status: "Interview",
      remote: true,
      appliedDate: "April 25, 2025",
      lastUpdate: "2 days ago",
      nextStep: "Technical Interview on April 30, 2025",
      matchPercentage: 98,
      logo: "TC",
    },
    {
      id: 2,
      position: "Backend Engineer",
      company: "Hyperloop Innovations",
      location: "Cebu IT Park, Cebu City",
      status: "Review",
      remote: false,
      appliedDate: "April 22, 2025",
      lastUpdate: "5 days ago",
      matchPercentage: 87,
      logo: "HI",
    },
    {
      id: 3,
      position: "UI/UX Designer",
      company: "Figma Dreams",
      location: "Remote (Philippines)",
      status: "Rejected",
      remote: true,
      appliedDate: "April 18, 2025",
      lastUpdate: "1 week ago",
      rejectionReason: "Position has been filled",
      matchPercentage: 91,
      logo: "FD",
    },
    {
      id: 4,
      position: "Product Manager",
      company: "InnoTech Solutions",
      location: "BGC, Taguig City",
      status: "Hired",
      remote: false,
      appliedDate: "April 10, 2025",
      lastUpdate: "3 days ago",
      startDate: "May 15, 2025",
      matchPercentage: 94,
      logo: "IS",
    },
    {
      id: 5,
      position: "DevOps Engineer",
      company: "CloudForce",
      location: "Remote",
      status: "Pending",
      remote: true,
      appliedDate: "April 26, 2025",
      lastUpdate: "1 day ago",
      matchPercentage: 82,
      logo: "CF",
    },
  ];

  const filteredApplications =
    statusFilter === "All"
      ? applications
      : applications.filter((app) => app.status === statusFilter);

  // const stats = {
  //   total: applications.length,
  //   pending: applications.filter((app) => app.status === "Pending").length,
  //   interview: applications.filter((app) => app.status === "Interview").length,
  //   hired: applications.filter((app) => app.status === "Hired").length,
  //   rejected: applications.filter((app) => app.status === "Rejected").length,
  // };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-600";
      case "Review":
        return "bg-purple-100 text-purple-600";
      case "Interview":
        return "bg-emerald-100 text-emerald-600";
      case "Hired":
        return "bg-green-100 text-green-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Review":
        return <BarChart2 className="w-4 h-4" />;
      case "Interview":
        return <Calendar className="w-4 h-4" />;
      case "Hired":
        return <CheckCircle className="w-4 h-4" />;
      case "Rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen min-w-screen">
      <ApplicantHeader />

      <main className="max-w-[1440px] mx-auto my-4">
        <div className="flex flex-col space-y-2 my-6">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>
        </div>

        <div className="w-full bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setStatusFilter("All")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "All"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter("Pending")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "Pending"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setStatusFilter("Review")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "Review"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Review
              </button>
              <button
                onClick={() => setStatusFilter("Interview")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "Interview"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Interview
              </button>
              <button
                onClick={() => setStatusFilter("Hired")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "Hired"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Hired
              </button>
              <button
                onClick={() => setStatusFilter("Rejected")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  statusFilter === "Rejected"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Rejected
              </button>
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white shadow p-4 rounded-lg flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Total Saved</h3>
              <h1 className="text-gray-700 text-3xl font-bold">5</h1>
            </div>

            <div className="flex items-center justify-center p-4 size-14 bg-yellow-100 text-yellow-400 rounded-full">
              <FaBookmark className="size-7" />
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-lg flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">90%+ Match</h3>
              <h1 className="text-gray-700 text-3xl font-bold">3</h1>
            </div>

            <div className="flex items-center justify-center p-4 size-14 bg-green-100 text-green-500 rounded-full">
              <FiCheckCircle className="size-7" />
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-lg flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Remote Jobs</h3>
              <h1 className="text-gray-700 text-3xl font-bold">3</h1>
            </div>

            <div className="flex items-center justify-center p-4 size-14 bg-purple-100 text-purple-500 rounded-full">
              <MdOutlineWorkOutline className="size-7" />
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-lg flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">Recent (7 days)</h3>
              <h1 className="text-gray-700 text-3xl font-bold">4</h1>
            </div>

            <div className="flex items-center justify-center p-4 size-14 bg-blue-100 text-blue-500 rounded-full">
              <CiClock1 className="size-7" />
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          {filteredApplications.map((application) => (
            <div
              key={application.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Application Header */}
              <div className="p-4 border-b border-gray-100 flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-md flex items-center justify-center text-gray-700 bg-blue-100`}
                  >
                    <span className="text-lg font-semibold text-blue-500">
                      {application.logo}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {application.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
                      <span>{application.company}</span>
                      <span>•</span>
                      <span>{application.location}</span>
                      {application.remote && (
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
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {getStatusIcon(application.status)}
                    <span className="ml-1">{application.status}</span>
                  </span>
                  <div className="bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-xs flex items-center">
                    <span className="font-semibold">
                      {application.matchPercentage}%
                    </span>
                    <span className="ml-1">Match</span>
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 sm:mb-0">
                    <div>
                      <span className="font-medium">Applied:</span>{" "}
                      {application.appliedDate}
                    </div>
                    <div>
                      <span className="font-medium">Last update:</span>{" "}
                      {application.lastUpdate}
                    </div>
                  </div>

                  {/* Status-specific information */}
                  {application.status === "Interview" && (
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-md text-sm">
                      <span className="font-medium">Next:</span>{" "}
                      {application.nextStep}
                    </div>
                  )}
                  {application.status === "Hired" && (
                    <div className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-sm">
                      <span className="font-medium">Start date:</span>{" "}
                      {application.startDate}
                    </div>
                  )}
                  {application.status === "Rejected" && (
                    <div className="px-3 py-1 bg-red-50 text-red-600 rounded-md text-sm">
                      <span className="font-medium">Reason:</span>{" "}
                      {application.rejectionReason}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-end gap-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 text-sm font-medium hover:bg-gray-50">
                    View Details
                  </button>

                  {application.status === "Interview" && (
                    <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-md text-sm font-medium hover:bg-emerald-200">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>Prepare for Interview</span>
                      </div>
                    </button>
                  )}

                  {application.status === "Pending" && (
                    <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-200">
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>Follow Up</span>
                      </div>
                    </button>
                  )}

                  {(application.status === "Pending" ||
                    application.status === "Review") && (
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
          ))}
        </div>
      </main>
    </div>
  );
}
