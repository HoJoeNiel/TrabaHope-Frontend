import { Sparkles } from "lucide-react";

export default function LoadingAIScore() {
  return (
    <div className="flex items-center px-3 py-2 space-x-2 border border-blue-600 rounded-full bg-blue-50">
      <Sparkles strokeWidth={1} className="text-blue-600 animate-blink" />
      <span className="text-sm text-blue-600">Getting AI Score</span>
    </div>
  );
}
