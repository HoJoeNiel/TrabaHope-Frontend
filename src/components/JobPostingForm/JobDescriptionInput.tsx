import { memo } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type JobDescriptionInputProps = {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

function JobDescriptionInput({
  value,
  defaultValue,
  onChange,
}: JobDescriptionInputProps) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
      <Label className="block mb-1 text-sm font-medium text-gray-200">
        Job Description<span className="text-red-500">*</span>
      </Label>
      <Textarea
        rows={6}
        placeholder="Provide a detailed description of the position..."
        className="block w-full text-white px-3 py-2 bg-gray-700 border border-gray-400 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobDescriptionInput);
