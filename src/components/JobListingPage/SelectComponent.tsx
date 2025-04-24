import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-sm">
        <SelectValue placeholder="Best Match" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Best Match</SelectLabel>
          <SelectItem value="best match">Best Match</SelectItem>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="salary (high to low)">
            Salary (High to Low)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
