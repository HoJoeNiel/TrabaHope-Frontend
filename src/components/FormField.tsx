import { Label } from "@/components/ui/label";
import { ErrorMessage, Field } from "formik";
import { SelectComponent } from "./SelectComponent";
import { LucideProps } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  isDropdown?: boolean;
  options?: string[];
  setFn?: (value: string) => void;
  placeholder?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export default function FormField({
  id,
  label,
  type,
  name,
  isDropdown,
  options,
  setFn,
  icon: IconComponent,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="relative w-full mb-4">
      <Label className="text-gray-300" htmlFor={id}>{label}</Label>
      {isDropdown && options && (
        <SelectComponent
          options={options}
          setFn={setFn}
          className="w-full py-6 text-gray-200 border rounded-lg bg-slate-700 border-slate-600 h-11"
        />
      )}
      {IconComponent && (
        <IconComponent className="absolute w-4 h-4 transform -translate-y-1/2 left-4 top-[49px] text-slate-400" />
      )}
      {!isDropdown && (
        <Field
          type={type}
          id={id}
          name={name}
          placeholder={placeholder || label}
          className="w-full py-3 pl-10 pr-4 text-white transition-colors border rounded-lg bg-slate-700 border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
      )}
      <ErrorMessage
        name={name!}
        component="span"
        className="text-sm text-red-500"
      />
    </div>
  );
}
