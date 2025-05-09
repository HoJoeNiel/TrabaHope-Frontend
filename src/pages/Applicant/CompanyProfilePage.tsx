import { useParams } from "react-router-dom";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Building, Star, ExternalLink } from "lucide-react";

import HeaderSection from "@/components/CompanyProfile/HeaderSection";
import CompanyStats from "@/components/CompanyProfile/CompanyStats";
import Tabs from "@/components/CompanyProfile/Tabs";
import Loading from "@/components/Loading";

export default function CompanyProfilePage() {
  const { companySlug } = useParams();
  const companies = useCompanyStore((state) => state.companies);
  const selectedCompany = companies.find((c) => c.companySlug === companySlug);

  if (!selectedCompany) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {selectedCompany && (
        <>
          <HeaderSection company={selectedCompany} />
          <CompanyStats company={selectedCompany} />
          <Tabs company={selectedCompany} />
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Similar Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((company) => (
                <div
                  key={company}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg mr-3 flex items-center justify-center">
                      <Building size={24} className="text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">DevStack Solutions</h3>
                      <div className="text-sm text-gray-600">
                        Software Development
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <Star
                        size={16}
                        className="text-yellow-400 fill-yellow-400 mr-1"
                      />
                      <span className="text-sm">4.5 (98 reviews)</span>
                    </div>
                    <button className="text-blue-500 text-sm hover:underline flex items-center">
                      View
                      <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
