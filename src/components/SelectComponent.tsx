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
  defaultValue,
  setFn,
}: {
  options: string[] | number[];
  className?: string;
  defaultValue?: string;
  setFn?: (value: string) => void;
}) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value) => setFn?.(value)}
      required
    >
      <SelectTrigger className={`text-sm ${className}`}>
        <SelectValue
          className="text-black"
          placeholder={defaultValue ?? options[0]}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{options[0]}</SelectLabel>
          {options.map((o) => (
            <SelectItem key={o} value={o.toString()}>
              {o}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
