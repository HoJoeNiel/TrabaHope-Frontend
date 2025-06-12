import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

import { isApplicant } from "@/helpers";
import { fetchResumeRecommendation } from "@/services/api";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

import Loading from "../Loading";

type ResumeTips = {
  mainpoint: string;
  description: string;
};

type CareerSuggestion = {
  title: string;
  description: string;
  score: string;
};

type Tips = {
  resume: ResumeTips[];
  career: CareerSuggestion[];
};

export default function ResumeTipsCard({ className }: { className?: string }) {
  const user = useLoggedInUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  if (!isApplicant(user)) throw new Error("User is not an applicant");

  const [tips, setTips] = useState<Tips>();

  useEffect(() => {
    setIsLoading(true);
    if (user.resumeFile) {
      fetchResumeRecommendation(user.resumeFile).then((tips) => {
        setTips(tips);
        setIsLoading(false);
      });
    }
  }, [user.resumeFile]);

  return (
    <div
      className={`w-full p-6 mt-4 mb-6 border rounded-lg border-gray-700/50 bg-gray-800/50 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <h2 className="font-semibold text-white">Resume Improvement Tips</h2>
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <ul className="space-y-3">
            {tips?.resume.map((tip) => (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-400">
                    {tip.mainpoint}
                  </span>
                </div>
                <p className="text-sm text-gray-300 indent-4">
                  {tip.description}
                </p>
              </div>
            ))}
          </ul>
          <button className="mt-4 text-sm text-sky-600 hover:text-sky-800">
            View Full Resume Analysis
          </button>
        </>
      )}
    </div>
  );
}
