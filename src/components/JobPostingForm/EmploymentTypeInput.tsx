import { EmploymentType } from "@/types";
import { memo } from "react";
import { Label } from "../ui/label";
import { Briefcase } from "lucide-react";
import { SelectComponent } from "../SelectComponent";

type EmploymentTypeInputProps = {
  onChange: (value: string) => void;
  defaultValue?: string;
};

function EmploymentTypeInput({
  onChange,
  defaultValue,
}: EmploymentTypeInputProps) {
  return (
    <div>
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        Employment Type<span className="text-red-500">*</span>
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Briefcase className="w-5 h-5 text-gray-400" />
        </div>
        <SelectComponent
          className="pl-10 border border-gray-300"
          options={Object.values(EmploymentType).map((i) => i)}
          defaultValue={defaultValue}
          setFn={onChange}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
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
