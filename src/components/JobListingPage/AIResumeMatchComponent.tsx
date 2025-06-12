import { Star, TrendingUp } from "lucide-react";

export default function AIResumeMatchComponent() {
  return (
    <div className="p-6 border bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10 border-blue-500/20 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
          <Star className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-semibold text-white">AI-Powered Job Matching</h3>
      </div>
      <p className="mb-4 text-sm text-gray-300">
        Our AI analyzes jobs against your resume, showing match percentages for
        each listing based on your skills and experience.
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-medium text-green-400">
            90%+ Match:
          </span>
          <span className="text-xs text-gray-300">
            Excellent fit for your profile
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xs font-medium text-blue-400">
            70-89% Match:
          </span>
          <span className="text-xs text-gray-300">
            Good match with your qualifications
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <span className="text-xs font-medium text-yellow-400">
            50-69% Match:
          </span>
          <span className="text-xs text-gray-300">
            Potential fit with some skill gaps
          </span>
        </div>
      </div>
      <button className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-white transition-colors bg-gray-700/50 hover:bg-gray-700 rounded-xl">
        <TrendingUp className="w-4 h-4" />
        Update Your Resume
      </button>
    </div>
  );
}
