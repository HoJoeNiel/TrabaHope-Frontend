import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FiAward } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const frontendSkills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SASS/SCSS",
  "Responsive Design",
  "UI/UX",
  "Figma",
  "Git",
  "REST APIs",
  "GraphQL",
  "Testing (Jest, React Testing Library)",
  "Performance Optimization",
  "Accessibility (a11y)",
  "Webpack/Vite",
  "State Management (Redux, Zustand)",
  "Component-based Architecture",
];

export default function ApplicantSkillsAccordion() {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-2 text-gray-800 font-bold">
              <FiAward className="size-5" />
              <h2 className="text-lg">Skills</h2>
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-4">
            {frontendSkills.map((s) => (
              <div
                key={s}
                className="inline-flex space-x-1 items-center m-1 px-3 py-1 rounded-full bg-blue-100 text-blue-500"
              >
                <span>{s}</span>
                <IoIosClose />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
