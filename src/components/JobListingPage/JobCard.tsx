import { useState } from "react";
import { CiBookmark, CiClock1 } from "react-icons/ci";
import { IoBookmark, IoLocationOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";

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
  parseMultilineInput,
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
  const user = useLoggedInUserStore((state) => state.user);

  if (!user || !isApplicant(user))
    throw new Error("User logged in is not an applicant.");

  const { mutate: sendApp, isPending: sending } = useSendApplication();
  const { mutate: cancelApp, isPending: cancelling } = useCancelApplication();
  const { mutate: saveJob, isPending: saving } = useSaveJob(user.id);
  const { mutate: unsaveJob, isPending: unsaving } = useUnsaveJob(user.id);
  const { data: appliedJobs } = useAppliedJobs(user.id);
  const { data: savedJobs } = useSavedJobs(user.id);

  const isAlreadyApplied = checkIfAlreadyApplied(appliedJobs ?? [], job);
  const savedJobIds = savedJobs?.map((j) => j.id);
  const isSaved = savedJobIds?.includes(job.id);

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
    requirements,
    responsibilities,
    benefits,
  } = job;

  const handleSendApplication = () => {
    const applicationData: ApplicationData = {
      jobId: String(job.id),
      companyId: job.companyId,
      applicantId: user.id,
      status: "Pending",
      appliedAt: new Date().toISOString(),
      feedback: null,
    };

    sendApp(applicationData);
  };

  const handleCancelApplication = () => {
    cancelApp({ jobId: String(job.id), applicantId: user.id });
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
      className={`w-full bg-gray-800/50 border border-gray-700/50 border-cyan-200 rounded-lg mb-8 shadow hover:shadow-lg transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex mb-4 space-x-4">
          <div
            className={`size-16 bg-fuchsia overflow-hidden rounded-lg text-sm flex justify-center items-center`}
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
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <div className="px-3 py-1 text-sm font-medium text-green-400 border rounded-full bg-green-500/20 border-green-500/30">
                    {job.score?.toFixed(2)}% match score
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <LuBuilding className="text-sky-600 size-4" />
                  <span className="text-sm text-sky-600">{company.name}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <IoLocationOutline className="size-4" />
                  <span className="text-sm text-gray-00">{location}</span>

                  {remote && (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Remote</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <CiClock1 className="size-4" />
                    <span className="text-sm">
                      {getRelativeTimeAgo(new Date(createdAt))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleSave}
                    disabled={saving || unsaving}
                    className="flex items-center justify-center p-2 rounded-full size-10"
                  >
                    {isSaved ? (
                      <IoBookmark className="text-yellow-400 size-5" />
                    ) : (
                      <CiBookmark className="text-gray-200 size-5" />
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
              <span className="text-white">
                {isExpanded ? "Show Less" : "Show Details"}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="my-4">
                <h2 className="mb-2 text-lg font-medium text-white">
                  Job Description
                </h2>
                <p className="text-justify text-gray-300">{description}</p>
              </div>

              <div className="my-4">
                <h2 className="mb-2 text-lg font-medium text-white">
                  Requirements
                </h2>
                <ul className="text-gray-300 list-disc list-inside indent-4">
                  {parseMultilineInput(requirements).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="my-4">
                <h2 className="mb-2 text-lg font-medium text-white">
                  Responsibilities
                </h2>
                <ul className="text-gray-300 list-disc list-inside indent-4">
                  {parseMultilineInput(responsibilities).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="my-4">
                <h2 className="mb-2 text-lg font-medium text-white">
                  Benefits and Perks
                </h2>
                <ul className="text-gray-300 list-disc list-inside indent-4">
                  {parseMultilineInput(benefits).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 my-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-gray-300 rounded-lg bg-gray-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid w-full grid-cols-2 mt-6">
                <div className="">
                  <p className="text-xs font-bold text-gray-400">
                    Salary Range
                  </p>
                  <p className="text-white">{`₱${minSalary} - ₱${maxSalary}`}</p>
                </div>

                <div className="">
                  <p className="text-xs font-bold text-gray-400">
                    Employment Type
                  </p>
                  <p className="text-white">{employmentType}</p>
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
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
