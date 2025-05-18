import { EmploymentType } from "@/types";
import { memo } from "react";
import { Label } from "../ui/label";
import { Briefcase } from "lucide-react";
import { SelectComponent } from "../SelectComponent";

type EmploymentTypeInputProps = {
  onChange: (value: string) => void;
};

function EmploymentTypeInput({ onChange }: EmploymentTypeInputProps) {
  return (
    <div>
      <Label className="block text-sm font-medium text-gray-700 mb-1">
        Employment Type<span className="text-red-500">*</span>
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Briefcase className="h-5 w-5 text-gray-400" />
        </div>
        <SelectComponent
          className="pl-10 border border-gray-300"
          options={Object.keys(EmploymentType).map((i) => i)}
          setFn={onChange}
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default memo(EmploymentTypeInput);
