import { STATS } from "@/mocks/mock-data";
import { TrendingUp } from "lucide-react";

export default function JobStats() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-md shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">
                    vs last month
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-fuchsia-700">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
