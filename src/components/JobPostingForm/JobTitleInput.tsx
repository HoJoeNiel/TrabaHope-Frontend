import { memo } from "react";
import { Input } from "../ui/input";

type JobTitleProps = {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

function JobTitleInput({ value, onChange, defaultValue }: JobTitleProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-300">
        Job Title<span className="text-red-500">*</span>
      </label>
      <Input
        type="text"
        placeholder="e.g. Frontend Developer"
        className="block w-full px-3 py-2 text-base text-white bg-gray-700 border border-gray-400 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobTitleInput);
