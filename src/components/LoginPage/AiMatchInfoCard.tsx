import { GoGraph } from "react-icons/go";

export default function AiMatchInfoCard() {
  return (
    <div className="bg-gradient-to-t from-blue-500 to-blue-700 rounded-2xl p-8 shadow-xl text-white">
      <h3 className="text-xl font-bold mb-4">
        Smart job matching powered by AI
      </h3>
      <p className="mb-6">
        Log in to discover opportunities that perfectly align with your skills
        and experience.
      </p>

      <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
        <div className="flex items-center mb-3">
          <div className="h-8 w-8 bg-white/20 shadow rounded-full flex items-center justify-center">
            <GoGraph className="text-white" />
          </div>
          <div className="ml-3 text-sm font-medium">Resume Match Score</div>
        </div>

        <div className="w-full bg-white/20 rounded-full h-3 mb-3">
          <div className="bg-green-400 h-3 w-[85%] rounded-full"></div>
        </div>

        <div className="flex justify-between text-xs">
          <span>Skills Match</span>
          <span>85%</span>
        </div>
      </div>
    </div>
  );
}
