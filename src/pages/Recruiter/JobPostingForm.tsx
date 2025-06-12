import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AIAssistantPanel from "@/components/JobPostingForm/AIAssistantPanel";
import EmploymentTypeInput from "@/components/JobPostingForm/EmploymentTypeInput";
import JobBenefitsAndPerksInput from "@/components/JobPostingForm/JobBenefitsAndPerksInput";
import JobDescriptionInput from "@/components/JobPostingForm/JobDescriptionInput";
import JobRequirementsInput from "@/components/JobPostingForm/JobRequirementsInput";
import JobResponsibilitiesInput from "@/components/JobPostingForm/JobResponsibilitiesInput";
import JobTitleInput from "@/components/JobPostingForm/JobTitleInput";
import LocationInput from "@/components/JobPostingForm/LocationInput";
import MaxSalaryInput from "@/components/JobPostingForm/MaxSalaryInput";
import MinSalaryInput from "@/components/JobPostingForm/MinSalaryInput";
import RemoteInput from "@/components/JobPostingForm/RemoteInput";
import SkillsAndKeywordsInput from "@/components/JobPostingForm/SkillsAndKeywordsInput";
import { Label } from "@/components/ui/label";
import { isRecruiter } from "@/helpers";
import { useJobPostingForm } from "@/hooks/useJobPostingForm";
import { postJob } from "@/services/api";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { EmploymentType, Job } from "@/types";

export default function CreateJobPostPage() {
  const [loading, setLoading] = useState(false);
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

  console.log(company);

  const handlePostJob = async () => {
    setLoading(true);
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
      !requirements.trim()
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

    const companyPostedJob: Job = {
      companyId: company.id,
      requirements,
      title: jobTitle,
      maxSalary: Number(salaryMax),
      minSalary: Number(salaryMin),
      location,
      employmentType: employmentType as EmploymentType,
      description,
      benefits,
      responsibilities,
      remote,
      tags,
      createdAt: new Date().toISOString(),
    };

    const id = await postJob(companyPostedJob); // the backend api returns the created id if successful
    console.log({ ...companyPostedJob, id });

    addJob({ ...companyPostedJob, id });
    navigate("/recruiter/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="pr-0 md:w-2/3 md:pr-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-200">
              Create New Job Post
            </h1>

            <form className="space-y-6">
              <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <JobTitleInput value={jobTitle} onChange={setJobTitle} />
                  <LocationInput value={location} onChange={setLocation} />
                </div>

                <RemoteInput value={remote} onChange={setRemote} />
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <EmploymentTypeInput onChange={setEmploymentType} />

                  <div className="flex flex-col">
                    <Label className="block mb-1 text-sm font-medium text-gray-200">
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
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save as Draft
                </button>
                {loading ? (
                  <button
                    disabled
                    className="flex items-center px-4 py-2 space-x-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="">Loading</span>
                    <Loader2 className="size-5 animate-spin" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handlePostJob}
                  >
                    Post Job
                  </button>
                )}
              </div>
            </form>
          </div>

          <AIAssistantPanel />
        </div>
      </div>
    </div>
  );
}
