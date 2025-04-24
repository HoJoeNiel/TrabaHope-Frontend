import { HiOutlineLightBulb } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";
import { FiRefreshCcw } from "react-icons/fi";

export default function AIResumeMatchComponent() {
  return (
    <div className="w-full  rounded-lg border border-gray-200 bg-white shadow-sm p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <HiOutlineLightBulb className="size-5 text-blue-600" />
        </div>
        <h3 className="font-medium text-gray-900">AI-Powered Job Matching</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Our AI analyzes jobs against your resume, showing match percentages for
        each listing based on your skills and experience.
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            <span className="font-medium">90%+ Match</span>: Excellent fit for
            your profile
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FiCheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            <span className="font-medium">70-89% Match</span>: Good match with
            your qualifications
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FiCheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">
            <span className="font-medium">50-69% Match</span>: Potential fit
            with some skill gaps
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-200">
        <button className="flex items-center justify-center w-full gap-2 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors">
          <FiRefreshCcw className="h-4 w-4" />
          Update Your Resume
        </button>
      </div>
    </div>
  );
}
