import { Job } from "@/types";
import { CiClock1 } from "react-icons/ci";
import { FiCheckCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import { getDaysAgo } from "@/helpers";

export default function SavedJobsCard({ job }: { job: Job }) {
  const {
    companyInitials,
    jobTitle,
    remote,
    location,
    matchPercentage,
    companyName,
    timestamps,
    description,
    tags,
  } = job;

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
    <div className="w-full bg-white rounded-lg overflow-hidden shadow pt-6 my-6">
      <div className="px-6">
        <div className="flex space-x-4 mb-4">
          <div className="size-16 rounded-lg bg-blue-100 text-sm p-4 flex justify-center items-center">
            <span className="text-2xl text-blue-600 font-semibold">
              {companyInitials}
            </span>
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold text-xl">{jobTitle}</h2>
                <div className="flex space-x-3 text-sm items-center">
                  <LuBuilding className="text-sky-600 size-5" />
                  <span className="text-sky-600">{companyName}</span>
                </div>

                <div className="flex space-x-3 text-sm items-center">
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
                      Posted{" "}
                      {timestamps?.posted
                        ? getDaysAgo(timestamps?.posted)
                        : "N/A"}{" "}
                      days ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <button className="">
                  <FiExternalLink className="text-blue-500 size-6" />
                </button>
                <button className="">
                  <CiTrash className="text-red-500 size-6" />
                </button>
              </div>
            </div>

            <div className="my-4 pr-6">
              <p className="text-gray-600 text-justify line-clamp-2">
                {description}
              </p>
            </div>

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
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 border-t border-t-gray-100 flex items-center justify-between py-4 px-6">
        <div
          className={`${percentageBGColor}  ${percentageTextColor} flex space-x-2 text-sm items-center px-2 py-1 rounded-xl`}
        >
          <FiCheckCircle className="size-5" />
          <span>{matchPercentage}% Matched</span>
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">
            Apply Now
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg">
            View Company
          </button>
        </div>
      </div>
    </div>
  );
}
