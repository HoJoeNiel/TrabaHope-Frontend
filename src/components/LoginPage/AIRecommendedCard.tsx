import { IoMdPerson } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function AIRecommendedCard() {
  return (
    <div className="bg-gray-800/50 w-full h-[160px] shadow-lg border border-gray-700 rounded-xl py-8 px-10">
      <div className="flex mb-4 space-x-6">
        <IoMdPerson className="ml-4 text-sky-500 size-8" />
        <div className="w-[40%]">
          <div className="h-4 mb-1 bg-gray-500 rounded-lg" />
          <div className="h-3 w-[70%] bg-gray-500 rounded-lg mb-1" />
        </div>
      </div>

      <div className="w-full h-1 bg-gray-300" />
      <div className="flex justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-green-200 border border-green-700 rounded-full size-7">
            <FaCheck className="text-green-600" />
          </div>
          <span className="ml-2 text-sm font-medium text-gray-200">
            94% Match
          </span>
        </div>
        <div className="px-3 py-1 text-sm text-white rounded-full bg-cyan-600">
          AI Recommended
        </div>
      </div>
    </div>
  );
}
