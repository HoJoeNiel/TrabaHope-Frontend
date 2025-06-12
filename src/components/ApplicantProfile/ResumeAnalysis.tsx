import { ResumeData } from "@/types";
import { FiCheckCircle } from "react-icons/fi";

export default function ResumeAnalysis({ resume }: { resume: ResumeData }) {
  // PLAN: Do the analysis on the backend. The extracted data from the applicant's resume will be used to generate an analysis using generative AI. Propose nalang to kila Luis/Darren
  console.log(resume);
  return (
    <div className="mt-6">
      <h3 className="mb-3 font-medium">AI Resume Analysis</h3>
      <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
        <div className="flex items-center mb-3">
          <div className="p-1 bg-blue-100 rounded-full">
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
  );
}
