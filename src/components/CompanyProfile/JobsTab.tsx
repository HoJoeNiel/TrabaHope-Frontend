import { Company } from "@/types";
import { Banknote, BriefcaseBusiness, Clock, MapPin } from "lucide-react";

export default function JobsTab({ company }: { company: Company }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Active Job Listings</h2>
      <div className="space-y-4">
        {company.activeJobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {job.title}
                </h3>
                <div className="flex items-center mt-1 text-gray-600 text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <BriefcaseBusiness size={14} className="mr-1" />
                  <span>{job.type}</span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  <span>Posted {job.postedDate}</span>
                </div>
                <div className="mt-1 text-gray-600 text-sm flex items-center">
                  <Banknote size={14} className="mr-1" />
                  <span>{job.salary}</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {job.matchScore}% Match
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
