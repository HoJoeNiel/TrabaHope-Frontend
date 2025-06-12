import { memo } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type RemoteInputProps = {
  value?: boolean;
  defaultValue?: boolean;
  onChange: (value: boolean) => void;
};

function RemoteInput({ value, defaultValue, onChange }: RemoteInputProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <Input
          id="remote"
          name="remote"
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          checked={value}
          defaultChecked={defaultValue}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Label htmlFor="remote" className="block ml-2 text-sm text-gray-200">
          Remote position
        </Label>
      </div>
    </div>
  );
}

export default memo(RemoteInput);
