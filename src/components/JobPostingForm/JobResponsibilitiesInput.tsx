import { memo } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type JobResponsibilitiesInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function JobResponsibilitiesInput({
  value,
  onChange,
}: JobResponsibilitiesInputProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Label className="block text-sm font-medium text-gray-700 mb-1">
        Responsibilities<span className="text-red-500">*</span>
      </Label>
      <Textarea
        rows={4}
        placeholder="Describe the day-to-day responsibilities and duties..."
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2 px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobResponsibilitiesInput);
