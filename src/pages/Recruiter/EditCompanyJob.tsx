import { EmploymentType, JobWithId } from "@/types";

import { useNavigate, useParams } from "react-router-dom";

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
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { isRecruiter } from "@/helpers";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { editJobBackend } from "@/services/api";

export default function EditCompanyJob() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const company = useLoggedInUserStore((state) => state.user);
  const jobs = useCompanyJobsStore((state) => state.jobs);
  const editJob = useCompanyJobsStore((state) => state.editJob);
  const { jobId } = useParams();

  if (!isRecruiter(company))
    throw new Error("User is not a recruiter/company.");

  const selectedJob = jobs.find((job) => String(job.id) === jobId);
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

  console.log(selectedJob);

  useEffect(() => {
    if (selectedJob) {
      setJobTitle(selectedJob.title);
      setLocation(selectedJob.location);
      setRemote(selectedJob.remote);
      setEmploymentType(selectedJob.employmentType);
      setSalaryMin(selectedJob.minSalary.toString());
      setSalaryMax(selectedJob.maxSalary.toString());
      setDescription(selectedJob.description);
      setRequirements(selectedJob.requirements);
      setResponsibilities(selectedJob.responsibilities);
      setBenefits(selectedJob.benefits);
      setTags(selectedJob.tags);
    }
  }, [
    selectedJob,
    setBenefits,
    setDescription,
    setEmploymentType,
    setJobTitle,
    setLocation,
    setRemote,
    setRequirements,
    setResponsibilities,
    setSalaryMax,
    setSalaryMin,
    setTags,
  ]);

  if (!selectedJob) {
    return <p>Job not found.</p>;
  }

  const handleEditJob = async () => {
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

    const job: JobWithId = {
      id: selectedJob.id,
      companyId: company.id,
      title: jobTitle,
      location,
      employmentType: employmentType as EmploymentType,
      description,
      requirements,
      responsibilities,
      benefits,
      remote,
      maxSalary: Number(salaryMax),
      minSalary: Number(salaryMin),
      tags,
      createdAt: selectedJob.createdAt,
    };

    await editJobBackend(job);
    editJob(job);
    navigate("/recruiter/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="pr-0 md:w-2/3 md:pr-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Edit</h1>

            <form className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <JobTitleInput
                    defaultValue={selectedJob.title}
                    onChange={setJobTitle}
                  />
                  <LocationInput
                    defaultValue={selectedJob.location}
                    onChange={setLocation}
                  />
                </div>

                <RemoteInput
                  defaultValue={selectedJob.remote}
                  onChange={setRemote}
                />

                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <EmploymentTypeInput
                    defaultValue={selectedJob.employmentType}
                    onChange={setEmploymentType}
                  />

                  <div className="flex flex-col">
                    <Label className="block mb-1 text-sm font-medium text-gray-700">
                      Salary Range<span className="text-red-500">*</span>
                    </Label>

                    <div className="flex space-x-4">
                      <MinSalaryInput
                        defaultValue={selectedJob.minSalary}
                        onChange={setSalaryMin}
                      />
                      <MaxSalaryInput
                        defaultValue={selectedJob.maxSalary}
                        onChange={setSalaryMax}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <JobDescriptionInput
                defaultValue={selectedJob.description}
                onChange={setDescription}
              />
              <JobRequirementsInput
                defaultValue={selectedJob.requirements}
                onChange={setRequirements}
              />
              <JobResponsibilitiesInput
                defaultValue={selectedJob.responsibilities}
                onChange={setResponsibilities}
              />
              <JobBenefitsAndPerksInput
                defaultValue={selectedJob.benefits}
                onChange={setBenefits}
              />
              <SkillsAndKeywordsInput
                tag={tag}
                tags={tags}
                defaultTags={selectedJob.tags}
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
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Loading
                    <Loader2 className="animate-spin" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleEditJob}
                  >
                    Post Job
                  </button>
                )}
              </div>
            </form>
          </div>
          {/* If di pa complete company profile details tsaka to lalabas */}
          {/* <AIAssistantPanel /> */}
        </div>
      </div>
    </div>
  );
}
