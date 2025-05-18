import { MapPin } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { memo } from "react";

type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div>
      <Label className="block text-sm font-medium text-gray-700 mb-1">
        Location<span className="text-red-500">*</span>
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="e.g. New York, NY"
          className="pl-9 pr-3 text-base block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border py-2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default memo(LocationInput);
