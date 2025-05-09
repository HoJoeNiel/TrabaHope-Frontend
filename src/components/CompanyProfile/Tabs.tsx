import { Company } from "@/types";
import { useState } from "react";
import TabContent from "./TabContent";

export default function Tabs({ company }: { company: Company }) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="border-b">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "about"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "jobs"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("jobs")}
          >
            Jobs ({company.activeJobs.length})
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "reviews"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({company.reviewCount})
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <TabContent company={company} activeTab={activeTab} />
    </div>
  );
}
