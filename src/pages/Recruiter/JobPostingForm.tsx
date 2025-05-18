import { CompanyPostedJob, EmploymentType } from "@/types";

import { Label } from "@/components/ui/label";

import { useJobPostingForm } from "@/hooks/useJobPostingForm";
import { useCompanyAuthStore } from "@/stores/useCompanyAuthStore";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";

import JobTitleInput from "@/components/JobPostingForm/JobTitleInput";
import LocationInput from "@/components/JobPostingForm/LocationInput";
import RemoteInput from "@/components/JobPostingForm/RemoteInput";
import EmploymentTypeInput from "@/components/JobPostingForm/EmploymentTypeInput";
import MinSalaryInput from "@/components/JobPostingForm/MinSalaryInput";
import MaxSalaryInput from "@/components/JobPostingForm/MaxSalaryInput";
import JobDescriptionInput from "@/components/JobPostingForm/JobDescriptionInput";
import JobRequirementsInput from "@/components/JobPostingForm/JobRequirementsInput";
import JobResponsibilitiesInput from "@/components/JobPostingForm/JobResponsibilitiesInput";
import JobBenefitsAndPerksInput from "@/components/JobPostingForm/JobBenefitsAndPerksInput";
import SkillsAndKeywordsInput from "@/components/JobPostingForm/SkillsAndKeywordsInput";
import AIAssistantPanel from "@/components/JobPostingForm/AIAssistantPanel";
import { useNavigate } from "react-router-dom";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function CreateJobPostPage() {
  const navigate = useNavigate();
  const company = useCompanyAuthStore((state) => state.company);
  const addJob = useCompanyJobsStore((state) => state.addJob);
  const jobs = useCompanyJobsStore((state) => state.jobs);
  const user = useLoggedInUserStore((state) => state.user);
  console.log(user);
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

  // console.log({
  //   jobTitle,
  //   location,
  //   remote,
  //   employmentType,
  //   salaryMin,
  //   salaryMax,
  //   description,
  //   requirements,
  //   responsibilities,
  //   benefits,
  //   tags,
  // });

  console.log(jobs);

  // TODO: function that handles sending job data to the backend.

  const handlePostJob = () => {
    if (!company) {
      alert("You must be logged in as a company/recruiter to post a job.");
      navigate("/signup/recruiter", { replace: true });
      return;
    }

    if (
      !jobTitle.trim() ||
      !location.trim() ||
      !employmentType.trim() ||
      !description.trim() ||
      !salaryMin.trim() ||
      !salaryMax.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (isNaN(Number(salaryMin)) || isNaN(Number(salaryMax))) {
      alert("Salary must be a valid number.");
      return;
    }

    if (Number(salaryMin) > Number(salaryMax)) {
      alert("Minimum salary should not be greater than maximum salary.");
      return;
    }

    const job: CompanyPostedJob = {
      id: crypto.randomUUID(),
      companyProfileUrl: null, // null muna kase wala pang profile page yung company/recruiter
      companyName: company.companyName,
      jobTitle,
      location,
      employmentType: employmentType as EmploymentType,
      description,
      remote,
      salaryRange: `${salaryMin} - ${salaryMax}`,
      tags,
      timestamps: {
        posted: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
    };

    addJob(job);
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-2/3 pr-0 md:pr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Create New Job Post
            </h1>

            <form className="space-y-6">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <JobTitleInput value={jobTitle} onChange={setJobTitle} />
                  <LocationInput value={location} onChange={setLocation} />
                </div>

                <RemoteInput value={remote} onChange={setRemote} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <EmploymentTypeInput onChange={setEmploymentType} />

                  <div className="flex flex-col">
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                      Salary Range<span className="text-red-500">*</span>
                    </Label>

                    <div className="flex space-x-4">
                      <MinSalaryInput
                        value={salaryMin}
                        onChange={setSalaryMin}
                      />
                      <MaxSalaryInput
                        value={salaryMax}
                        onChange={setSalaryMax}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <JobDescriptionInput
                value={description}
                onChange={setDescription}
              />
              <JobRequirementsInput
                value={requirements}
                onChange={setRequirements}
              />
              <JobResponsibilitiesInput
                value={responsibilities}
                onChange={setResponsibilities}
              />
              <JobBenefitsAndPerksInput
                value={benefits}
                onChange={setBenefits}
              />
              <SkillsAndKeywordsInput
                tag={tag}
                tags={tags}
                setTags={setTags}
                setTag={setTag}
              />

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
                  onClick={handlePostJob}
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>

          <AIAssistantPanel />
        </div>
      </div>
    </div>
  );
}
