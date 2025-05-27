import { memo } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type JobResponsibilitiesInputProps = {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

function JobResponsibilitiesInput({
  value,
  defaultValue,
  onChange,
}: JobResponsibilitiesInputProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        Responsibilities<span className="text-red-500">*</span>
      </Label>
      <Textarea
        rows={4}
        placeholder="Describe the day-to-day responsibilities and duties..."
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobResponsibilitiesInput);
