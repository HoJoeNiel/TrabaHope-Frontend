import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComponent({
  options,
  className,
  setFn,
}: {
  options: string[];
  className?: string;
  setFn?: (value: string) => void;
}) {
  return (
    <Select onValueChange={(value) => setFn?.(value)}>
      <SelectTrigger className={`text-sm ${className}`}>
        <SelectValue className="text-black" placeholder={options[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{options[0]}</SelectLabel>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
