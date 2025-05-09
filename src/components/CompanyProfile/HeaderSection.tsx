import { Company } from "@/types";
import { BriefcaseBusiness, Calendar, Globe, MapPin, Users } from "lucide-react";

export default function HeaderSection({ company }: { company: Company }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <img
            src={company.logo}
            alt={company.name}
            className="size-20 object-contain"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {company.name}
              </h1>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin size={16} className="mr-1" />
                <span>{company.location}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Follow Company
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">
                Share
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <BriefcaseBusiness size={16} className="mr-1" />
              <span>{company.industry}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users size={16} className="mr-1" />
              <span>{company.size}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Globe size={16} className="mr-1" />
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {company.website}
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-1" />
              <span>Founded: {company.founded}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
