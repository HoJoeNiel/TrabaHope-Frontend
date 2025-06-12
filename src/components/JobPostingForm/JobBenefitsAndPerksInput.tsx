import { memo } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type JobBenefitsAndPerksInputProps = {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

function JobBenefitsAndPerksInput({
  value,
  defaultValue,
  onChange,
}: JobBenefitsAndPerksInputProps) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
      <Label className="block mb-1 text-sm font-medium text-gray-200">
        Benefits & Perks
      </Label>
      <Textarea
        rows={4}
        placeholder="List benefits such as health insurance, flexible hours, etc..."
        className="block w-full px-3 py-2 text-white bg-gray-700 border border-gray-400 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(JobBenefitsAndPerksInput);
