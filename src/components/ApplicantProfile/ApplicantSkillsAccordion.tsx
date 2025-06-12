import { ApplicantAuth } from "@/types";

import { useState } from "react";
import { useEditApplicantInfo } from "@/services/mutations";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { BadgeCheck, Edit } from "lucide-react";

export default function ApplicantSkillsAccordion({
  user,
}: {
  user: ApplicantAuth;
}) {
  const setUser = useLoggedInUserStore((state) => state.setUser);

  const [skills, setSkills] = useState(user.skills);
  const [skill, setSkill] = useState("");
  const { mutate: addSkill } = useEditApplicantInfo();

  const handleAddSkill = () => {
    if (!skill) return;

    setSkills((prev) => [...(prev ?? []), skill]);
    addSkill({ ...user, skills: [...(user.skills ?? []), skill] });
    setUser({ ...user, skills: [...(user.skills ?? []), skill] });
    setSkill("");
  };

  return (
    <div className="p-8 mx-6 mb-8 bg-gray-800 border border-gray-700 rounded shadow-xl ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <BadgeCheck className="w-6 h-6 rounded text-cyan-500" />
          Skills
        </h2>
        <button className="text-cyan-400 hover:text-cyan-300">
          <Edit className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {user.skills &&
          skills?.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow`}
            >
              {skill}
              <button className="ml-2 text-white/80 hover:text-white">×</button>
            </span>
          ))}
        <input
          type="text"
          className="border rounded bg-gray-700/50 border-gray-300/50 text-white w-[100px]"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddSkill();
            }
          }}
        />
      </div>
    </div>
  );
}
