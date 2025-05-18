import { memo } from "react";
import { Input } from "../ui/input";

type JobTitleProps = {
  value: string;
  onChange: (value: string) => void;
};

function JobTitleInput({ value, onChange }: JobTitleProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Job Title<span className="text-red-500">*</span>
      </label>
      <Input
        type="text"
        placeholder="e.g. Frontend Developer"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border text-base py-2 px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobTitleInput);
