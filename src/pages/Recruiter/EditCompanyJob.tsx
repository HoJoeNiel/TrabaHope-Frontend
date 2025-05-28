import { CompanyPostedJob, EmploymentType } from "@/types";

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
import { isRecruiter, parseMultilineInput } from "@/helpers";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function EditCompanyJob() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const company = useLoggedInUserStore((state) => state.user);
  const jobs = useCompanyJobsStore((state) => state.jobs);
  const editJob = useCompanyJobsStore((state) => state.editJob);
  const { jobId } = useParams();

  const selectedJob = jobs.find((job) => job.id === jobId);
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

  useEffect(() => {
    if (selectedJob) {
      setJobTitle(selectedJob.jobTitle);
      setLocation(selectedJob.location);
      setRemote(selectedJob.remote);
      setEmploymentType(selectedJob.employmentType);
      setSalaryMin(selectedJob.salaryRange.min.toString());
      setSalaryMax(selectedJob.salaryRange.max.toString());
      setDescription(selectedJob.description);
      setRequirements(selectedJob.requirements.join());
      setResponsibilities(selectedJob.responsibilities.join());
      setBenefits(selectedJob.benefits.join());
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

  if (!selectedJob) {
    return <p>Job not found.</p>;
  }

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
      id: selectedJob.id,
      companyProfileUrl: null, // null muna kase wala pang profile page yung company/recruiter
      companyName: company.name,
      jobTitle,
      location,
      employmentType: employmentType as EmploymentType,
      description,
      requirements: parseMultilineInput(requirements),
      responsibilities: parseMultilineInput(responsibilities),
      benefits: parseMultilineInput(benefits),
      remote,
      salaryRange: {
        min: Number(salaryMin),
        max: Number(salaryMax),
      },
      tags,
      timestamps: {
        posted: new Date(),
      },
    };

    editJob(job);
    navigate("/recruiter/dashboard");

    // BACKEND EDITING JOB CONNECTION
    // try {
    //   const response = await fetch("url", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(job),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Failed to post job. Status: ${response.status}`);
    //   }

    //   addJob(job);
    //   navigate("/recruiter/dashboard");
    // } catch (error) {
    //   let errorMessage = "Something went wrong: ";
    //   if (error instanceof Error) {
    //     errorMessage += error.message;
    //     throw new Error(errorMessage);
    //   }
    // } finally {
    //   setLoading(true);
    // }
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
                    defaultValue={selectedJob.jobTitle}
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
                        defaultValue={selectedJob.salaryRange.min}
                        onChange={setSalaryMin}
                      />
                      <MaxSalaryInput
                        defaultValue={selectedJob.salaryRange.max}
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
                defaultValue={selectedJob.requirements.join("\n")}
                onChange={setRequirements}
              />
              <JobResponsibilitiesInput
                defaultValue={selectedJob.responsibilities.join("\n")}
                onChange={setResponsibilities}
              />
              <JobBenefitsAndPerksInput
                defaultValue={selectedJob.benefits.join("\n")}
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
                    onClick={handlePostJob}
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
