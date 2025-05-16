import {
  Info,
  MapPin,
  Briefcase,
  Plus,
  Building,
  PhilippinePeso,
  Trash,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useJobPostingForm } from "@/hooks/useJobPostingForm";
import { SelectComponent } from "@/components/SelectComponent";

export default function CreateJobPostPage() {
  const {
    jobTitle,
    setJobTitle,
    location,
    setLocation,
    remote,
    setRemote,
    employmentType,
    setEmploymentType,
    salaryMin,
    setSalaryMin,
    salaryMax,
    setSalaryMax,
    description,
    setDescription,
    requirements,
    setRequirements,
    responsibilities,
    setResponsibilities,
    benefits,
    setBenefits,
    tag,
    setTag,
    tags,
    setTags,
  } = useJobPostingForm();

  const handleAddtag = () => {
    if (tag.trim() !== "" && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // TODO: function that handles sending job data to the backend.

  console.log({
    jobTitle,
    location,
    remote,
    employmentType,
    salaryMin,
    salaryMax,
    description,
    requirements,
    responsibilities,
    benefits,
    tag,
    tags,
  });

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navbar */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-indigo-600 w-8 h-8 flex items-center justify-center rounded-md text-white font-bold mr-2">
                  T
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  TrabaHope
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Job Listings
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Candidates
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-2/3 pr-0 md:pr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Create New Job Post
            </h1>

            <div className="space-y-6">
              {/* Basic Info Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title<span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Frontend Developer"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border text-base py-2 px-3"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                      Location<span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="text"
                        placeholder="e.g. New York, NY"
                        className="pl-9 pr-3 text-base block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <Input
                      id="remote"
                      name="remote"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={remote}
                      onChange={(e) => setRemote(e.target.checked)}
                    />
                    <Label
                      htmlFor="remote"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remote position
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                      Employment Type<span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <SelectComponent
                        className="pl-10 border border-gray-300"
                        options={[
                          "Full-time",
                          "Part-time",
                          "Contract",
                          "Internship",
                          "Temporary",
                        ]}
                        setFn={setEmploymentType}
                      />

                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                      Salary Range<span className="text-red-500">*</span>
                    </Label>
                    <div className="flex space-x-4">
                      <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhilippinePeso className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          type="number"
                          placeholder="Minimum"
                          className="pl-8 pr-3 text-base block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2"
                          value={salaryMin}
                          onChange={(e) => setSalaryMin(e.target.value)}
                        />
                      </div>
                      <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhilippinePeso className="h-5 w-5 text-gray-400" />
                        </div>

                        <Input
                          type="number"
                          placeholder="Maximum"
                          className="pl-8 pr-3 text-base block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2"
                          value={salaryMax}
                          onChange={(e) => setSalaryMax(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="bg-white shadow rounded-lg p-6">
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description<span className="text-red-500">*</span>
                </Label>
                <Textarea
                  rows={6}
                  placeholder="Provide a detailed description of the position..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Requirements */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start justify-between mb-1">
                  <Label className="block text-sm font-medium text-gray-700">
                    Requirements<span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-center text-xs text-gray-500">
                    <Info className="h-4 w-4 mr-1" />
                    <span>
                      This information helps our AI match qualified candidates
                      to your job posting
                    </span>
                  </div>
                </div>
                <Textarea
                  rows={4}
                  placeholder="List the skills, qualifications, and experience required..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
              </div>

              {/* Responsibilities */}
              <div className="bg-white shadow rounded-lg p-6">
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Responsibilities<span className="text-red-500">*</span>
                </Label>
                <Textarea
                  rows={4}
                  placeholder="Describe the day-to-day responsibilities and duties..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                />
              </div>

              {/* Benefits & Perks */}
              <div className="bg-white shadow rounded-lg p-6">
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Benefits & Perks
                </Label>
                <Textarea
                  rows={4}
                  placeholder="List benefits such as health insurance, flexible hours, etc..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                />
              </div>

              {/* Skills & Keywords */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start justify-between mb-1">
                  <Label className="block text-sm font-medium text-gray-700">
                    Skills & Keywords
                  </Label>
                  <div className="flex items-center text-xs text-gray-500">
                    <Info className="h-4 w-4 mr-1" />
                    <span>
                      Adding relevant skills helps our AI match the right
                      candidates to your position
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="e.g. React, TypeScript, Tailwind"
                    className="block flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border text-sm py-2 px-3"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddtag();
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleAddtag}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((t, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {t}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(t)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save as Draft
                </button>
                <button
                  type="button"
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>

          {/* AI Assistant Panel */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="sticky top-24 bg-white shadow rounded-lg p-6 border border-indigo-100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Info className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  AI Posting Assistant
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                TrabaHope's AI will analyze your job posting to improve
                candidate matching for best results.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative mt-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Be specific about required skills and experience
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative mt-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Include keywords relevant to the position
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative mt-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Describe responsibilities clearly
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative mt-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Mention company culture and benefits
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-indigo-50 rounded-md p-4">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-indigo-500 mr-2" />
                  <span className="text-sm font-medium text-indigo-800">
                    Company Profile
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  Complete your company profile to increase visibility to job
                  seekers. Add your logo, description, and culture information.
                </p>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Complete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
