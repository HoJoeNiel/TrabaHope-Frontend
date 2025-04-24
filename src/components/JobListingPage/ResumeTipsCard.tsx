import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";

export default function ResumeTipsCard() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-6 mb-6 mt-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-100 size-10 rounded-full flex items-center justify-center text-sky-600">
          <HiOutlineLightBulb className="size-5 text-blue-600" />
        </div>
        <h2 className="font-bold">Resume Improvement Tips</h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <FaCircleCheck className="text-green-500 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800 text-sm">Strong Skills Section</h3>
            <p className="text-sm text-gray-600">
              Your technical skills are well highlighted.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaCircleExclamation className="text-yellow-500 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800 text-sm">
              Add Quantifiable Results
            </h3>
            <p className="text-sm text-gray-600">
              Include metrics and outcomes from previous roles.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaCircleExclamation className="text-yellow-500 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800 text-sm">
              Update Work Experience
            </h3>
            <p className="text-sm text-gray-600">
              Your most recent role could use more detail.
            </p>
          </div>
        </li>
      </ul>
      <button className="mt-4 text-sky-600 hover:text-sky-800 text-sm">
        View Full Resume Analysis
      </button>
    </div>
  );
}
