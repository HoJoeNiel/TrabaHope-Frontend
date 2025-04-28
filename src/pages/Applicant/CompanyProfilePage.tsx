import { useState } from "react";
import {
  Building,
  MapPin,
  BriefcaseBusiness,
  Globe,
  Users,
  Calendar,
  Clock,
  Banknote,
  Star,
  ExternalLink,
} from "lucide-react";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { useParams } from "react-router-dom";

export default function CompanyProfilePage() {
  const [activeTab, setActiveTab] = useState("about");
  const { companySlug } = useParams();
  const companies = useCompanyStore((state) => state.companies);
  const selectedCompany = companies.find(
    (company) => company.companySlug === companySlug
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Company Header Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <img
              src={selectedCompany?.logo}
              alt={selectedCompany?.name}
              className="size-20 object-contain"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {selectedCompany?.name}
                </h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span>{selectedCompany?.location}</span>
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
                <span>{selectedCompany?.industry}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={16} className="mr-1" />
                <span>{selectedCompany?.size}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe size={16} className="mr-1" />
                <a
                  href={`https://${selectedCompany?.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {selectedCompany?.website}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-1" />
                <span>Founded: {selectedCompany?.founded}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-5 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <BriefcaseBusiness size={24} className="text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-semibold">
              {selectedCompany?.openPositions}
            </div>
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
                {selectedCompany?.averageRating}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(selectedCompany?.averageRating ?? 0)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
            <div className="text-gray-600">
              {selectedCompany?.reviewCount} Reviews
            </div>
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

      {/* Tabs */}
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
              Jobs ({selectedCompany?.activeJobs.length})
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                activeTab === "reviews"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({selectedCompany?.reviewCount})
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "about" && (
            <div>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  About {selectedCompany?.name}
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {selectedCompany?.about}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700">{selectedCompany?.mission}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany?.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCompany?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "jobs" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Active Job Listings
              </h2>
              <div className="space-y-4">
                {selectedCompany?.activeJobs.map((job) => (
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
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Employee Reviews</h2>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center">
                  <Star size={16} className="mr-2" />
                  Write a Review
                </button>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">
                      {selectedCompany?.averageRating}
                    </div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < Math.round(selectedCompany?.averageRating ?? 0)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {selectedCompany?.reviewCount} reviews
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        // Mock percentages - would come from API
                        const percent =
                          rating === 5
                            ? 65
                            : rating === 4
                            ? 25
                            : rating === 3
                            ? 7
                            : rating === 2
                            ? 2
                            : 1;

                        return (
                          <div key={rating} className="flex items-center">
                            <div className="flex items-center w-12">
                              <span className="mr-1">{rating}</span>
                              <Star
                                size={14}
                                className="text-yellow-400 fill-yellow-400"
                              />
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                              <div
                                className="bg-blue-500 h-2.5 rounded-full"
                                style={{ width: `${percent}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">
                              {percent}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample review - would be mapped from API data */}
              <div className="border-b pb-6 mb-6">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium">Senior Frontend Developer</h3>
                    <div className="text-sm text-gray-600">
                      Full-time • 2+ years
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < 5
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Great company culture and work-life balance. Management is
                  supportive and the tech stack is modern. Lots of opportunities
                  for professional growth and learning new technologies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    Great benefits
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    Work-life balance
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    Modern tech stack
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  Posted March 15, 2025
                </div>
              </div>

              <div className="text-center">
                <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Companies */}
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
    </div>
  );
}
