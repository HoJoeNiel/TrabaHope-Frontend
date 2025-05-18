import { memo } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type JobDescriptionInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function JobDescriptionInput({ value, onChange }: JobDescriptionInputProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Label className="block text-sm font-medium text-gray-700 mb-1">
        Job Description<span className="text-red-500">*</span>
      </Label>
      <Textarea
        rows={6}
        placeholder="Provide a detailed description of the position..."
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobDescriptionInput);
