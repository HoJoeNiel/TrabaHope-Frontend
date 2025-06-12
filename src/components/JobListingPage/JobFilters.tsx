import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { corporateJobLocations, salary } from "@/mocks/mock-data";
import { SelectComponent } from "../SelectComponent";
import { Label } from "../ui/label";

type JobFiltersProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  minSalary: number | undefined;
  setMinSalary: React.Dispatch<React.SetStateAction<number | undefined>>;
  maxSalary: number | undefined;
  setMaxSalary: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export default function JobFilters({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  minSalary,
  setMinSalary,
  maxSalary,
  setMaxSalary,
}: JobFiltersProps) {
  const [rawSearchQuery, setRawSearchQuery] = useState(searchQuery);
  const [rawLocation, setRawLocation] = useState(location);
  const [rawMinSalary, setRawMinSalary] = useState<number>(minSalary ?? 0);
  const [rawMaxSalary, setRawMaxSalary] = useState<number>(maxSalary ?? 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(rawSearchQuery);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [rawSearchQuery, setSearchQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation(rawLocation);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [rawLocation, setLocation]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMinSalary(rawMinSalary);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [rawMinSalary, setMinSalary]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMaxSalary(rawMaxSalary);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [rawMaxSalary, setMaxSalary]);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  return (
    <div className="w-full p-6 mt-2 border rounded-lg shadow border-gray-700/50 bg-gray-800/50">
      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch className="text-gray-400 size-4" />
        </div>
        <input
          type="text"
          className="w-full py-3 pl-12 pr-4 text-white placeholder-gray-400 transition-all border rounded bg-gray-700/50 border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
          placeholder="Search jobs, companies, or keywords"
          value={rawSearchQuery}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onChange={(e) => setRawSearchQuery(e.target.value)}
        />
        <button className="absolute px-4 py-1 text-sm text-white rounded-md right-2 top-3 bg-sky-600 hover:bg-sky-700">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-300">
            Location:
          </Label>
          <SelectComponent
            options={corporateJobLocations}
            setFn={(value) => setRawLocation(value)}
            className="w-full px-4 py-3 text-white border rounded bg-gray-700/50 border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-300">
            Minimum Salary
          </Label>
          <SelectComponent
            options={salary}
            setFn={(value) => setRawMinSalary(Number(value))}
            className="w-full px-4 py-3 text-white border rounded bg-gray-700/50 border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-300">
            Maximum Salary
          </Label>
          <SelectComponent
            options={salary}
            setFn={(value) => setRawMaxSalary(Number(value))}
            className="w-full px-4 py-3 text-white border rounded bg-gray-700/50 border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
      </div>
    </div>
  );
}
