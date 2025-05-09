import { Company } from "@/types";
import { BriefcaseBusiness, Clock, Star } from "lucide-react";

export default function CompanyStats({ company }: { company: Company }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <BriefcaseBusiness size={24} className="text-blue-500" />
        </div>
        <div>
          <div className="text-2xl font-semibold">{company.openPositions}</div>
          <div className="text-gray-600">Open Positions</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
          <Star size={24} className="text-yellow-500" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-2xl font-semibold mr-2">
              {company.averageRating}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.round(company.averageRating ?? 0)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <div className="text-gray-600">{company.reviewCount} Reviews</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
          <Clock size={24} className="text-green-500" />
        </div>
        <div>
          <div className="text-2xl font-semibold">98%</div>
          <div className="text-gray-600">Response Rate</div>
        </div>
      </div>
    </div>
  );
}
