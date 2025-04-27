import { useState } from "react";
import { COLORS } from "@/constants/constants";
import { Job } from "@/types";

import { FiCheckCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { LuBuilding } from "react-icons/lu";
import { useJobStore } from "@/stores/useJobStore";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function JobCard({ job }: { job: Job }) {
  const addJobToSaved = useJobStore((state) => state.addJobToSaved);
  const removeJobToSaved = useJobStore((state) => state.removeJobToSaved);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const {
    companyInitials,
    jobTitle,
    remote,
    employmentType,
    location,
    salaryRange,
    matchPercentage,
    companyName,
    timestamps,
    description,
    tags,
    actions,
  } = job;

  console.log(job);

  const index = Math.floor(Math.random() * 22);
  const text = COLORS[index].text;
  const bg = COLORS[index].bg;
  const border = COLORS[index].border;

  let percentageBGColor;
  let percentageTextColor;

  if (matchPercentage <= 100 && matchPercentage >= 90) {
    percentageBGColor = "bg-green-200";
    percentageTextColor = "text-green-700";
  } else if (matchPercentage >= 70) {
    percentageBGColor = "bg-blue-200";
    percentageTextColor = "text-blue-700";
  } else {
    percentageBGColor = "bg-yellow-200";
    percentageTextColor = "text-yellow-700";
  }

  return (
    <div
      className={`w-full bg-white border-l-4 ${border} rounded-lg mb-8 shadow hover:shadow-lg transition-all duration-300`}
    >
      <div className="px-6 py-8">
        <div className="flex space-x-4 mb-4">
          <div
            className={`size-16 ${bg} rounded-lg text-sm p-4 flex justify-center items-center`}
          >
            <span className={`${text} text-2xl`}>{companyInitials}</span>
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold text-xl">{jobTitle}</h2>
                <div className="flex space-x-2 items-center">
                  <LuBuilding className="text-sky-600 size-5" />
                  <span className="text-sky-600">{companyName}</span>
                </div>
                <div className="flex space-x-1 items-center">
                  <IoLocationOutline className="text-gray-700 size-5" />
                  <span className="text-gray-700">{location}</span>
                  {remote && (
                    <div className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-xl">
                      Remote
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <CiClock1 className="text-gray-700 size-5" />
                    <span className="text-gray-700 text-sm">
                      {timestamps?.posted}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-3">
                <div
                  className={`${percentageBGColor}  ${percentageTextColor} flex space-x-2 text-sm items-center px-2 py-1 rounded-xl`}
                >
                  <FiCheckCircle className={`${percentageTextColor} size-5`} />
                  <span>{matchPercentage}% Matched</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={
                      job.actions.saved
                        ? () => removeJobToSaved(job)
                        : () => addJobToSaved(job)
                    }
                    className={`p-2 size-10 rounded-full flex items-center justify-center ${
                      job.actions.saved
                        ? "bg-yellow-100 hover:bg-yellow-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {job.actions.saved ? (
                      <FaBookmark className="text-yellow-500" />
                    ) : (
                      <CiBookmark className="text-gray-800 size-5" />
                    )}
                  </button>
                  {actions.applied && (
                    <span className="bg-green-200 px-4 py-2 rounded-full text-green-700">
                      Applied
                    </span>
                  )}
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
              <h2 className="text-gray-800 font-medium mb-2 text-lg">
                Job Description
              </h2>
              <p className="text-gray-600 text-justify">{description}</p>

              <div className="w-full flex space-x-4 overflow-x-scroll no-scrollbar mt-4">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 text-sm rounded-full font-medium bg-gray-200 text-gray-600"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="w-full grid grid-cols-2 mt-6">
                <div className="">
                  <p className="text-gray-800 font-bold">Salary Range</p>
                  <p className="text-gray-500">{salaryRange}</p>
                </div>

                <div className="">
                  <p className="text-gray-800 font-bold">Employment Type</p>
                  <p className="text-gray-500">{employmentType}</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg">
                  Apply Now
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 text-lg border border-gray-300 rounded-lg">
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
