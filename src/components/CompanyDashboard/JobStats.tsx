import {
  Calendar,
  FileText,
  TrendingUp,
  UserCheck,
  UserRoundX,
} from "lucide-react";

import { Application } from "@/types";

export default function JobStats({
  applications,
}: {
  applications: Application[];
}) {
  const totalApplications = applications.length;
  const totalHired = applications.filter((a) => a.status === "Hired").length;
  const totalInterviews = applications.filter(
    (a) => a.status === "Interview"
  ).length;
  const totalRejections = applications.filter(
    (a) => a.status === "Reject"
  ).length;

  const stats = [
    {
      label: "Total Applications",
      value: totalApplications,
      change: "+0%", // Hardcoded muna since montly naman calculation neto
      trend: "up",
      icon: FileText,
    },
    {
      label: "Hired This Month",
      value: totalHired,
      change: "+0%",
      trend: "up",
      icon: UserCheck,
    },
    {
      label: "Total Interviews",
      value: totalInterviews,
      change: "+0%",
      trend: "up",
      icon: Calendar,
    },
    {
      label: "Total Rejections",
      value: totalRejections,
      change: "+0%",
      trend: "up",
      icon: UserRoundX,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 pt-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="p-6 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-purple-500/30 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-200">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-100">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="mr-1 text-green-500 size-4" />
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                  <span className="ml-1 text-sm text-gray-200">
                    vs last month
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-500/20">
                <IconComponent className="text-purple-500 size-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
