import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}

export default function FormField({ id, label, type, placeholder }: Props) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder || label}
        className="w-full"
      />
    </div>
  );
}
