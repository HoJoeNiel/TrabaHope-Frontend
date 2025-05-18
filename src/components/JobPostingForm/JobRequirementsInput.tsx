import { Info } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { memo } from "react";

type JobRequirementsInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function JobRequirementsInput({ value, onChange }: JobRequirementsInputProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-start justify-between mb-1">
        <Label className="block text-sm font-medium text-gray-700">
          Requirements<span className="text-red-500">*</span>
        </Label>
        <div className="flex items-center text-xs text-gray-500">
          <Info className="h-4 w-4 mr-1" />
          <span>
            This information helps our AI match qualified candidates to your job
            posting
          </span>
        </div>
      </div>
      <Textarea
        rows={4}
        placeholder="List the skills, qualifications, and experience required..."
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobRequirementsInput);
