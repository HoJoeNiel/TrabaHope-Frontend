import { PhilippinePeso } from "lucide-react";
import { Input } from "../ui/input";
import { memo } from "react";

type MinSalaryInputProps = {
  value?: string;
  defaultValue?: number;
  onChange: (value: string) => void;
};

function MinSalaryInput({
  value,
  defaultValue,
  onChange,
}: MinSalaryInputProps) {
  return (
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <PhilippinePeso className="w-5 h-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Minimum"
        className="block w-full py-2 pl-8 pr-3 text-base border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(MinSalaryInput);
