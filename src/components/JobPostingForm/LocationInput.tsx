import { MapPin } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { memo } from "react";

type LocationInputProps = {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

function LocationInput({ value, onChange, defaultValue }: LocationInputProps) {
  return (
    <div>
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        Location<span className="text-red-500">*</span>
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MapPin className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="e.g. New York, NY"
          className="block w-full py-2 pr-3 text-base border border-gray-300 rounded-md shadow-sm pl-9 focus:border-indigo-500 focus:ring-indigo-500"
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default memo(LocationInput);
