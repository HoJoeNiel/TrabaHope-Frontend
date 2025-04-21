import { Label } from "@/components/ui/label";
import { ErrorMessage, Field } from "formik";

interface Props {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}

export default function FormField({
  id,
  label,
  type,
  name,
  placeholder,
}: Props) {
  return (
    <div className="w-full mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder || label}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg"
      />
      <ErrorMessage
        name={id}
        component="span"
        className="text-red-500 text-sm"
      />
    </div>
  );
}
