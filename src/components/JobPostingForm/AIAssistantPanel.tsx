import { Building, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIAssistantPanel() {
  const navigate = useNavigate();

  return (
    <div className="mt-14 md:w-1/3">
      <div className="sticky p-6 bg-gray-800 border border-gray-700 rounded-lg shadow top-24">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-fuchsia-200">
            <Info className="w-5 h-5 text-fuchsia-700" />
          </div>
          <h2 className="text-lg font-semibold text-gray-100">
            AI Posting Assistant
          </h2>
        </div>
        <p className="mb-4 text-sm text-gray-200">
          TrabaHope's AI will analyze your job posting to improve candidate
          matching for best results.
        </p>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="relative flex-shrink-0 w-5 h-5 mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-300">
              Be specific about required skills and experience
            </p>
          </div>

          <div className="flex items-start">
            <div className="relative flex-shrink-0 w-5 h-5 mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-300">
              Include keywords relevant to the position
            </p>
          </div>

          <div className="flex items-start">
            <div className="relative flex-shrink-0 w-5 h-5 mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-300">
              Describe responsibilities clearly
            </p>
          </div>

          <div className="flex items-start">
            <div className="relative flex-shrink-0 w-5 h-5 mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-300">
              Mention company culture and benefits
            </p>
          </div>
        </div>

        <div className="p-4 mt-6 border border-gray-600 rounded-md bg-gray-700/50">
          <div className="flex items-center">
            <Building className="w-5 h-5 mr-2 text-fuchsia-500" />
            <span className="text-sm font-medium text-gray-200">
              Company Profile
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-300">
            Complete your company profile to increase visibility to job seekers.
            Add your logo, description, and culture information.
          </p>
          <button
            type="button"
            onClick={() => navigate("/recruiter/profile")}
            className="inline-flex items-center justify-center w-full px-4 py-2 mt-3 text-sm font-medium border border-transparent rounded-md bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
