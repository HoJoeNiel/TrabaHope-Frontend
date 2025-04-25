import { SelectComponent } from "@/components/SelectComponent";

import { Filter } from "lucide-react";
import { CiSearch } from "react-icons/ci";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SORT_BY = [
  "Sort by: Newest First",
  "Sort by: Match percentage",
  "Sort by: Salary: High to Low",
  "Sort by: Salary: Low to High",
  "Sort by: Company name",
];
const JOB_TYPES = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
];
const LOCATIONS = ["All Locations", "Remote", "Metro Manila", "Cebu", "Davao"];
const EXPERIENCE_LEVEL = [
  "All Levels",
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Manager",
];

export default function FilterSection() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="w-full bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search saved jobs by title, company, or keywords"
                className="pl-10 pr-4 py-2 h-full w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <AccordionTrigger className="px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
              <div className="flex space-x-2 items-center">
                <Filter size={18} className="text-gray-500" />
                <span>Filters</span>
              </div>
            </AccordionTrigger>

            <SelectComponent options={SORT_BY} className="w-[200px]" />
          </div>

          <AccordionContent>
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <SelectComponent options={JOB_TYPES} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <SelectComponent options={LOCATIONS} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <SelectComponent options={EXPERIENCE_LEVEL} />
              </div>
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
