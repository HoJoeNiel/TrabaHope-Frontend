import { IoMdPerson } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function AIRecommendedCard() {
  return (
    <div className="bg-white w-full h-[160px] shadow-lg border border-gray-200 rounded-xl py-8 px-10">
      <div className="flex space-x-6 mb-4">
        <IoMdPerson className="text-sky-500 ml-4 size-8" />
        <div className="w-[40%]">
          <div className="h-4 bg-gray-200 rounded-lg mb-1" />
          <div className="h-3 w-[70%] bg-gray-100 rounded-lg mb-1" />
        </div>
      </div>

      <div className="w-full h-1 bg-gray-100" />
      <div className="flex justify-between py-4">
        <div className="flex space-x-2 items-center">
          <div className="size-7 bg-green-200 rounded-full flex justify-center items-center">
            <FaCheck className="text-green-600" />
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">
            94% Match
          </span>
        </div>
        <div className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
          AI Recommended
        </div>
      </div>
    </div>
  );
}
