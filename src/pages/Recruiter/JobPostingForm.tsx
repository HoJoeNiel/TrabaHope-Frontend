import { CompanyPostedJob, EmploymentType, Job } from "@/types";
import { parseMultilineInput } from "@/helpers";

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
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function CreateJobPostPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const company = useLoggedInUserStore((state) => state.user);
  const addJob = useCompanyJobsStore((state) => state.addJob);

  // FOR TESTING LANG
  useEffect(() => {
    addJob({
      id: crypto.randomUUID(),
      companyProfileUrl: null,
      companyName: "[Company Name]",
      jobTitle: "Frontend Developer",
      location: "[City, State or Remote]",
      employmentType: "Full-Time" as EmploymentType,
      description: `We are seeking a talented and passionate Frontend Developer to join our development team. You will be responsible for implementing visual elements that users see and interact with in a web application, working closely with designers, product managers, and backend developers to bring ideas to life.`,
      requirements: [
        "Proficiency in HTML5, CSS3, and JavaScript (ES6+)",
        "Experience with React, Vue.js, or Angular",
        "Familiarity with version control systems such as Git",
        "Understanding of responsive design principles and cross-browser compatibility",
        "Experience with CSS preprocessors (SASS, SCSS) and/or utility-first frameworks like Tailwind CSS",
        "Knowledge of modern build tools and bundlers (Webpack, Vite, etc.)",
        "Experience working with APIs (REST or GraphQL)",
        "Strong problem-solving skills and attention to detail",
        "Ability to work independently and in a team environment",
      ],
      responsibilities: [
        "Develop new user-facing features using modern JavaScript frameworks (React, Vue, or Angular)",
        "Write clean, reusable, and scalable code",
        "Collaborate with UI/UX designers to translate designs into functional web components",
        "Optimize web pages for maximum speed and scalability",
        "Ensure the technical feasibility of UI/UX designs",
        "Maintain and improve website performance and accessibility",
        "Integrate RESTful APIs and work with backend developers",
        "Participate in code reviews and team meetings",
        "Stay up to date with emerging frontend technologies and best practices",
      ],
      benefits: [
        "Competitive salary",
        "Flexible work hours and remote options",
        "Health, dental, and vision insurance",
        "Paid time off and holidays",
        "Learning & development budget",
        "Collaborative and inclusive company culture",
      ],
      remote: true,
      salaryRange: {
        min: 60000,
        max: 90000,
      },
      tags: [
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Frontend",
        "Tailwind CSS",
        "API Integration",
        "Responsive Design",
      ],
      timestamps: {
        posted: new Date(),
      },
    });
  }, [addJob]);

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
      createdAt: new Date().toLocaleDateString(),
    };

    try {
      const response = await fetch(
        "https://943eb37ac2c45846abb79dfb912fb52b.serveo.net/api/web/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyPostedJob),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to save job. Status: ${response.status}`);
      }

      console.log("SUMAKSES");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    // const job: CompanyPostedJob = {
    //   id: crypto.randomUUID(),
    //   companyProfileUrl: null, // null muna kase wala pang profile page yung company/recruiter
    //   companyName: company.name,
    //   jobTitle,
    //   location,
    //   employmentType: employmentType as EmploymentType,
    //   description,
    //   requirements: parseMultilineInput(requirements),
    //   responsibilities: parseMultilineInput(responsibilities),
    //   benefits: parseMultilineInput(benefits),
    //   remote,
    //   salaryRange: {
    //     min: Number(salaryMin),
    //     max: Number(salaryMax),
    //   },
    //   tags,
    //   timestamps: {
    //     posted: new Date(),
    //   },
    // };

    // addJob(job);
    navigate("/recruiter/dashboard");

    // BACKEND JOB POSTING CONNECTION
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

    //     addJob(job);
    //     navigate("/recruiter/dashboard");
    //   } catch (error) {
    //     let errorMessage = "Something went wrong: ";
    //     if (error instanceof Error) {
    //       errorMessage += error.message;
    //       throw new Error(errorMessage);
    //     }
    //   } finally {
    //     setLoading(true);
    //   }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="pr-0 md:w-2/3 md:pr-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
              Create New Job Post
            </h1>

            <form className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <JobTitleInput value={jobTitle} onChange={setJobTitle} />
                  <LocationInput value={location} onChange={setLocation} />
                </div>

                <RemoteInput value={remote} onChange={setRemote} />

                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <EmploymentTypeInput onChange={setEmploymentType} />

                  <div className="flex flex-col">
                    <Label className="block mb-1 text-sm font-medium text-gray-700">
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
