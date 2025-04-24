import { CiSearch } from "react-icons/ci";
import PreferenceCombobox from "./PreferenceCombobox";
import {
  experienceLevel,
  industries,
  jobType,
  locations,
  salaryRange,
} from "@/constants/constants";

export default function JobFilters() {
  return (
    <div className="w-full bg-white p-6 shadow rounded-lg mt-4">
      <div className="mb-3">
        <h2 className="font-bold text-xl">Find Your Dream Job</h2>
        <p className="text-gray-500">
          Use AI-Powered matching to discover opportunities that fits your
          skills
        </p>
      </div>

      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className="size-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="Search jobs, companies, or keywords"
        />
        <button className="absolute right-2 top-2 bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-1 rounded-md">
          Search
        </button>
      </div>

      <div className="mb-3">
        <p className="font-medium text-sm">Filter by preference:</p>
        <div className="flex gap-3 mt-2">
          <PreferenceCombobox label="Job Type" category={jobType} />
          <PreferenceCombobox
            label="Experience level"
            category={experienceLevel}
          />
          <PreferenceCombobox label="Location" category={locations} />
          <PreferenceCombobox label="Industry" category={industries} />
          <PreferenceCombobox label="Salary Range" category={salaryRange} />
        </div>
      </div>
    </div>
  );
}
