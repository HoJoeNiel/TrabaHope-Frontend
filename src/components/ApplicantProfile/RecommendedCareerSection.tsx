import { isApplicant } from "@/helpers";
import { fetchResumeRecommendation } from "@/services/api";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useEffect, useState } from "react";
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

export default function RecommendedCareerSection() {
  const user = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(user)) throw new Error("User is not a recruiter");

  const [tips, setTips] = useState<Tips>();
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="p-8 mx-6 mb-8 bg-gray-800 border border-gray-700 rounded shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Career Path Recommendations
      </h2>
      {isLoading && <Loading />}
      {tips?.career && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-6 border border-green-700 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-xl">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {tips?.career[0].title}
              </h3>
              <p className="text-gray-300">{tips?.career[0].description}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 text-sm text-green-400 border rounded-full bg-green-500/20 border-green-500/30">
                {tips?.career[0].score} Match
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border border-blue-700 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-xl">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {tips?.career[1].title}
              </h3>
              <p className="text-gray-300">{tips?.career[1].description}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 text-sm text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30">
                {tips?.career[1].score} Match
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border border-purple-700 bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-xl">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {tips?.career[2].title}
              </h3>
              <p className="text-gray-300">{tips?.career[2].description}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 text-sm text-purple-400 border rounded-full bg-purple-500/20 border-purple-500/30">
                {tips?.career[2].score} Match
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
