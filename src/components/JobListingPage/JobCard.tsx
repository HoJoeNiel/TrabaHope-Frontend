import { useState } from "react";
import { CiBookmark, CiClock1 } from "react-icons/ci";
import { IoBookmark, IoLocationOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  checkIfAlreadyApplied,
  getRelativeTimeAgo,
  isApplicant,
  slugify,
} from "@/helpers";
import {
  useCancelApplication,
  useSaveJob,
  useSendApplication,
  useUnsaveJob,
} from "@/services/mutations";
import { useAppliedJobs, useSavedJobs } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { ApplicantJob, ApplicationData } from "@/types";

export default function JobCard({ job }: { job: ApplicantJob }) {
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(applicant))
    throw new Error("User logged in is not an applicant.");

  const { mutate: sendApp, isPending: sending } = useSendApplication();
  const { mutate: cancelApp, isPending: cancelling } = useCancelApplication();
  const { mutate: saveJob, isPending: saving } = useSaveJob(applicant.id);
  const { mutate: unsaveJob, isPending: unsaving } = useUnsaveJob(applicant.id);
  const { data: appliedJobs } = useAppliedJobs(applicant.id);
  const { data: savedJobs } = useSavedJobs(applicant.id);

  const isAlreadyApplied = checkIfAlreadyApplied(appliedJobs ?? [], job);
  const savedJobIds = savedJobs?.map((j) => j.id);
  const isSaved = savedJobIds?.includes(job.id);

  const navigate = useNavigate();
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const {
    company,
    createdAt,
    description,
    title,
    employmentType,
    location,
    maxSalary,
    minSalary,
    remote,
    tags,
  } = job;

  const handleSendApplication = () => {
    const applicationData: ApplicationData = {
      jobId: String(job.id),
      companyId: job.companyId,
      applicantId: applicant.id,
      status: "Pending",
      appliedAt: new Date().toISOString(),
      feedback: null,
    };

    console.log(applicationData);

    sendApp(applicationData);
  };

  const handleCancelApplication = () => {
    cancelApp({ jobId: String(job.id), applicantId: applicant.id });
  };

  const handleViewCompany = () => {
    const slug = slugify(company.name);
    navigate(`/company/${slug}`);
  };

  const handleToggleSave = () => {
    if (isSaved) {
      unsaveJob(String(job.id));
    } else {
      saveJob(String(job.id));
    }
  };

  return (
    <div
      className={`w-full bg-white border-l-4 border-cyan-200 rounded-lg mb-8 shadow hover:shadow-lg transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex mb-4 space-x-4">
          <div
            className={`size-12 bg-black border border-gray-100 p-2 rounded-lg text-sm flex justify-center items-center`}
          >
            {job.company.photoURL ? (
              <img
                src={job.company.photoURL}
                alt="company profile picture"
                className="object-contain w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center overflow-hidden bg-black size-10">
                <span className="text-xl font-semibold text-white">
                  {job.company.name
                    .split(" ")
                    .map((word) => word[0]?.toUpperCase())
                    .join("")}
                </span>
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-1">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex items-center space-x-1">
                  <LuBuilding className="text-sky-600 size-4" />
                  <span className="text-sm text-sky-600">{company.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <IoLocationOutline className="text-gray-700 size-4" />
                  <span className="text-sm text-gray-700">{location}</span>

                  {remote && (
                    <div className="bg-blue-100 text-blue-700 px-2 py-0.5 text-sm rounded-full">
                      Remote
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <CiClock1 className="text-gray-700 size-4" />
                    <span className="text-sm text-gray-700">
                      {getRelativeTimeAgo(createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-3">
                <div className="px-4 py-2 text-sm text-green-600 bg-green-100 rounded">
                  {job.AIScore}% match score
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleSave}
                    disabled={saving || unsaving}
                    className="flex items-center justify-center p-2 rounded-full size-10"
                  >
                    {isSaved ? (
                      <IoBookmark className="text-yellow-800 size-5" />
                    ) : (
                      <CiBookmark className="text-gray-800 size-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={() => setExpanded(!isExpanded)}>
              <span className="">
                {isExpanded ? "Show Less" : "Show Details"}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <h2 className="mb-2 text-lg font-medium text-gray-800">
                Job Description
              </h2>
              <p className="text-justify text-gray-600">{description}</p>

              <div className="flex w-full mt-4 space-x-4 overflow-x-scroll no-scrollbar">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="grid w-full grid-cols-2 mt-6">
                <div className="">
                  <p className="font-bold text-gray-800">Salary Range</p>
                  <p className="text-gray-500">{`₱${minSalary} - ₱${maxSalary}`}</p>
                </div>

                <div className="">
                  <p className="font-bold text-gray-800">Employment Type</p>
                  <p className="text-gray-500">{employmentType}</p>
                </div>
              </div>

              <div className="flex mt-6 space-x-4">
                {isAlreadyApplied ? (
                  <button
                    className={`px-3 py-1 bg-gray-200 text-gray-800 rounded text-base`}
                    onClick={handleCancelApplication}
                    disabled={cancelling}
                  >
                    Cancel Application
                  </button>
                ) : (
                  <button
                    className={`px-3 py-1 bg-blue-500 text-white rounded text-base`}
                    onClick={handleSendApplication}
                    disabled={sending}
                  >
                    Apply Now
                  </button>
                )}
                <button
                  onClick={handleViewCompany}
                  className="px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded"
                >
                  View Company
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
