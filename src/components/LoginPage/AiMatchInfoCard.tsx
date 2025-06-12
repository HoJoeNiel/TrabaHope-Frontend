import { GoGraph } from "react-icons/go";

export default function AiMatchInfoCard() {
  return (
    <div className="p-8 text-white shadow-xl bg-gradient-to-br from-cyan-600/50 to-cyan-500/50 rounded-2xl">
      <h3 className="mb-4 text-xl font-bold">
        Smart job matching powered by AI
      </h3>
      <p className="mb-6">
        Log in to discover opportunities that perfectly align with your skills
        and experience.
      </p>

      <div className="p-4 border rounded-lg bg-white/10 border-white/20 backdrop-blur-sm">
        <div className="flex items-center mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full shadow bg-white/20">
            <GoGraph className="text-white" />
          </div>
          <div className="ml-3 text-sm font-medium">Resume Match Score</div>
        </div>

        <div className="w-full h-3 mb-3 rounded-full bg-white/20">
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
