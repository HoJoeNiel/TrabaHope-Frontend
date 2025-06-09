import { ApplicantAuth } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FiAward } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { useEditApplicantInfo } from "@/services/mutations";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

export default function ApplicantSkillsAccordion({
  user,
}: {
  user: ApplicantAuth;
}) {
  const setUser = useLoggedInUserStore((state) => state.setUser);

  const [skills, setSkills] = useState(user.skills);
  const [skill, setSkill] = useState("");
  const { mutate: addSkill, isPending, isError } = useEditApplicantInfo();

  const handleAddSkill = () => {
    if (!skill) return;

    setSkills((prev) => [...(prev ?? []), skill]);
    addSkill({ ...user, skills: [...(user.skills ?? []), skill] });
    setUser({ ...user, skills: [...(user.skills ?? []), skill] });
    setSkill("");
  };

  return (
    <div className="p-6 my-8 bg-white rounded-lg shadow">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-2 font-bold text-gray-800">
              <FiAward className="size-5" />
              <h2 className="text-lg">Skills</h2>
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex mt-4 space-x-2">
            {!user.skills?.length && (
              <p className="pl-4 text-lg text-gray-700">
                You didn't add skills yet.
              </p>
            )}
            {skills?.length &&
              skills.map((s) => (
                <div
                  key={s}
                  className="inline-flex items-center px-3 py-1 m-1 space-x-1 text-blue-500 bg-blue-100 rounded-full"
                >
                  <span>{s}</span>
                  <IoIosClose />
                </div>
              ))}
            <input
              type="text"
              className="border rounded w-[100px]"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddSkill();
                }
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
