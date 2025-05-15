import { Label } from "@/components/ui/label";
import { ErrorMessage, Field } from "formik";
import { SelectComponent } from "./SelectComponent";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  isDropdown?: boolean;
  options?: string[];
  setFn?: (value: string) => void;
  placeholder?: string;
}

export default function FormField({
  id,
  label,
  type,
  name,
  isDropdown,
  options,
  setFn,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="w-full mb-4">
      <Label htmlFor={id}>{label}</Label>
      {isDropdown && options && (
        <SelectComponent
          options={options}
          setFn={setFn}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg h-11"
        />
      )}
      {!isDropdown && (
        <Field
          type={type}
          id={id}
          name={name}
          placeholder={placeholder || label}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg"
        />
      )}
      <ErrorMessage
        name={name!}
        component="span"
        className="text-red-500 text-sm"
      />
    </div>
  );
}
