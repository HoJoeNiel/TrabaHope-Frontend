import { memo } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type RemoteInputProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

function RemoteInput({ value, onChange }: RemoteInputProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <Input
          id="remote"
          name="remote"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Label htmlFor="remote" className="ml-2 block text-sm text-gray-700">
          Remote position
        </Label>
      </div>
    </div>
  );
}

export default memo(RemoteInput);
