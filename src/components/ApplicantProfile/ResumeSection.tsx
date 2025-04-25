import { CiFileOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

export default function ResumeSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Resume</h2>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
            <GoDownload size={16} />
            <span>Download</span>
          </button>
          <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
            <MdOutlineFileUpload size={16} />
            <span>Update</span>
          </button>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded p-2">
            <CiFileOn size={20} className="text-blue-500" />
          </div>
          <div className="ml-3">
            <p className="font-medium">Jonel_Villaver_Resume.pdf</p>
            <p className="text-sm text-gray-500">Uploaded on April 25, 2025</p>
          </div>
        </div>
        <div className="bg-green-100 text-green-700 text-sm py-1 px-3 rounded-full">
          Active
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-3">AI Resume Analysis</h3>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 rounded-full p-1">
              <FiCheckCircle size={16} className="text-blue-500" />
            </div>
            <span className="ml-2 font-medium text-blue-700">
              Your resume is optimized for tech positions
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              ✓ Strong technical skills section
            </p>
            <p className="text-sm text-gray-700">✓ Good project descriptions</p>
            <p className="text-sm text-gray-700">
              ⚠️ Add more quantifiable achievements
            </p>
            <p className="text-sm text-gray-700">
              ⚠️ Consider adding certifications section
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
