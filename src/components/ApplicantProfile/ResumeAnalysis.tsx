import { FiCheckCircle } from "react-icons/fi";

type ResumeAnalysisProps = {
  resume: File;
};

export default function ResumeAnalysis({ resume }: ResumeAnalysisProps) {
  // TODO: Implement resume analysis feature

  console.log(resume);
  return (
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
  );
}
