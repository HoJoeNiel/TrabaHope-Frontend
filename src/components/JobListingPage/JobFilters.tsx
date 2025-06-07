import { CiSearch } from "react-icons/ci";
import PreferenceCombobox from "./PreferenceCombobox";
import { useEffect, useState } from "react";
import { locations, salaryRange } from "@/mocks/mock-data";

type JobFiltersProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  salary: string;
  setSalary: React.Dispatch<React.SetStateAction<string>>;
};

export default function JobFilters({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  salary,
  setSalary,
}: JobFiltersProps) {
  const [rawSearchQuery, setRawSearchQuery] = useState(searchQuery);
  const [rawLocation, setRawLocation] = useState(location);
  const [rawSalary, setRawSalary] = useState(salary);

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
      setSalary(rawSalary);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [rawSalary, setSalary]);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  return (
    <div className="w-full p-6 mt-2 bg-white rounded-lg shadow">
      <div className="mb-2">
        <h2 className="text-lg font-bold">Find Your Dream Job</h2>
        <p className="text-sm text-gray-500">
          Use AI-Powered matching to discover opportunities that fits your
          skills
        </p>
      </div>

      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch className="text-gray-400 size-4" />
        </div>
        <input
          type="text"
          className="block w-full py-3 pl-10 pr-3 text-sm border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="Search jobs, companies, or keywords"
          value={rawSearchQuery}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onChange={(e) => setRawSearchQuery(e.target.value)}
        />
        <button className="absolute px-4 py-1 text-sm text-white rounded-md right-2 top-2 bg-sky-600 hover:bg-sky-700">
          Search
        </button>
      </div>

      <div className="mb-3">
        <p className="text-sm font-medium">Filter by preference:</p>
        <div className="flex gap-3 mt-2">
          <PreferenceCombobox
            setPreferences={setRawLocation}
            label="Location"
            category={locations}
          />

          <PreferenceCombobox
            setPreferences={setRawSalary}
            label="Salary Range"
            category={salaryRange}
          />
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-2">
        {preferences?.map((p) => (
          <div
            key={p}
            className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-600 transition-all duration-300 bg-blue-100 rounded-full"
          >
            <span>{p}</span>
            <IoIosClose
              className="hover:text-blue-700"
              onClick={() =>
                setPreferences((prev) => prev.filter((i) => i !== p))
              }
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
