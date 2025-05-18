import { Building, Info } from "lucide-react";

export default function AIAssistantPanel() {
  return (
    <div className="md:w-1/3 mt-8 md:mt-0">
      <div className="sticky top-24 bg-white shadow rounded-lg p-6 border border-indigo-100">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <Info className="h-5 w-5 text-indigo-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            AI Posting Assistant
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          TrabaHope's AI will analyze your job posting to improve candidate
          matching for best results.
        </p>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Be specific about required skills and experience
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Include keywords relevant to the position
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Describe responsibilities clearly
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 relative mt-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Mention company culture and benefits
            </p>
          </div>
        </div>

        <div className="mt-6 bg-indigo-50 rounded-md p-4">
          <div className="flex items-center">
            <Building className="h-5 w-5 text-indigo-500 mr-2" />
            <span className="text-sm font-medium text-indigo-800">
              Company Profile
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Complete your company profile to increase visibility to job seekers.
            Add your logo, description, and culture information.
          </p>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
