import { CompanyPostedJob, EmploymentType } from "@/types";

import { useNavigate } from "react-router-dom";

import { useJobPostingForm } from "@/hooks/useJobPostingForm";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";

import { Label } from "@/components/ui/label";
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
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { isRecruiter } from "@/helpers";

export default function CreateJobPostPage() {
  const navigate = useNavigate();
  const company = useLoggedInUserStore((state) => state.user);
  const addJob = useCompanyJobsStore((state) => state.addJob);

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

  const handlePostJob = () => {
    if (!company || company.role !== "recruiter" || !isRecruiter(company)) {
      alert("You must be logged in as a company/recruiter to post a job.");
      navigate("/signup/recruiter", { replace: true });
      return;
    }

    if (
      !jobTitle.trim() ||
      !location.trim() ||
      !employmentType.trim() ||
      !description.trim() ||
      !responsibilities.trim() ||
      !requirements.trim() ||
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
      companyName: company.name,
      jobTitle,
      location,
      employmentType: employmentType as EmploymentType,
      description,
      requirements,
      benefits,
      remote,
      salaryRange: [Number(salaryMin), Number(salaryMax)],
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
    navigate("/recruiter/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
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
