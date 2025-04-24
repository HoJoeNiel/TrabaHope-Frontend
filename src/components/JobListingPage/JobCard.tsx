import { useState } from "react";
import { COLORS } from "@/constants/constants";
import { Job } from "@/types";

import { FiCheckCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { LuBuilding } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";

export default function JobCard({ job }: { job: Job }) {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const {
    companyInitials,
    jobTitle,
    remote,
    employmentType,
    location,
    salaryRange,
    matchPercentage,
    companyName,
    postedDate,
    description,
    tags,
    actions,
  } = job;

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
                    <span className="text-gray-700 text-sm">{postedDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-1">
                <div
                  className={`${percentageBGColor}  ${percentageTextColor} flex space-x-2 text-sm items-center px-2 py-1 rounded-xl`}
                >
                  <FiCheckCircle className={`${percentageTextColor} size-5`} />
                  <span>{matchPercentage}% Matched</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`p-2 size-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200`}
                  >
                    <CiBookmark className="text-gray-800 size-5" />
                  </div>
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

        <div className={isExpanded ? "block" : "hidden"}>
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
            <button className="px-4 py-2 bg-sky-500 rounded-lg text-white text-lg">
              Apply Now
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 font-bold text-lg border border-gray-300 rounded-lg">
              View Company
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setExpanded(!isExpanded)}
        className="w-full border-t border-t-gray-200 py-2 text-gray-600 flex items-center justify-center space-x-2"
      >
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        <span className="">{isExpanded ? "Show Less" : "Show Details"}</span>
      </button>
    </div>
  );
}
