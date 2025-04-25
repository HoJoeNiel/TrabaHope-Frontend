import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function WorkExperienceAccordion() {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            <div className="flex items-center space-x-2 text-gray-800 font-bold">
              <MdOutlineWorkOutline className="size-5" />
              <h2 className="text-lg">Work Experience</h2>
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-4">
            <div className="border-b border-gray-200 pb-4 mt-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Senior Frontend Developer</h3>
                  <p className="text-gray-600">TechCorp Inc.</p>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  <TbEdit size={16} />
                </button>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <CiCalendar size={14} className="mr-1" />
                <span>Jan 2023 - Present</span>
                <CiLocationOn size={14} className="ml-4 mr-1" />
                <span>Makati City, Remote</span>
              </div>
              <p className="mt-2 text-gray-700">
                Led frontend development for multiple web applications using
                React, TypeScript, and Tailwind CSS. Improved performance by 40%
                through code optimization.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4 mt-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Senior Frontend Developer</h3>
                  <p className="text-gray-600">TechCorp Inc.</p>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  <TbEdit size={16} />
                </button>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <CiCalendar size={14} className="mr-1" />
                <span>Jan 2023 - Present</span>
                <CiLocationOn size={14} className="ml-4 mr-1" />
                <span>Makati City, Remote</span>
              </div>
              <p className="mt-2 text-gray-700">
                Led frontend development for multiple web applications using
                React, TypeScript, and Tailwind CSS. Improved performance by 40%
                through code optimization.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4 mt-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Senior Frontend Developer</h3>
                  <p className="text-gray-600">TechCorp Inc.</p>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  <TbEdit size={16} />
                </button>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <CiCalendar size={14} className="mr-1" />
                <span>Jan 2023 - Present</span>
                <CiLocationOn size={14} className="ml-4 mr-1" />
                <span>Makati City, Remote</span>
              </div>
              <p className="mt-2 text-gray-700">
                Led frontend development for multiple web applications using
                React, TypeScript, and Tailwind CSS. Improved performance by 40%
                through code optimization.
              </p>
            </div>

            <button className="text-blue-400 text-lg my-3">+ Add Experience</button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
