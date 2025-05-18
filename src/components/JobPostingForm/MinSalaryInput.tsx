import { PhilippinePeso } from "lucide-react";
import { Input } from "../ui/input";
import { memo } from "react";

type MinSalaryInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function MinSalaryInput({ value, onChange }: MinSalaryInputProps) {
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <PhilippinePeso className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Minimum"
        className="pl-8 pr-3 text-base block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(MinSalaryInput);
